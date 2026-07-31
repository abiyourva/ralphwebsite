// Chaos test: simulate a transient network failure on the SECOND Kit API
// call (the tag call, which runs right after the subscriber upsert
// succeeds) and assert tagKitSubscriber recovers via retry instead of
// leaving the subscriber permanently untagged after one blip.
//
// Pure Node, no server, no real network — global.fetch is stubbed. Run
// with Node's native TS type-stripping (Node 22+), no ts-node/tsx needed:
//
//   node --experimental-strip-types qa/chaos-suite/tag-retry.mjs

process.env.KIT_API_SECRET = "test-key";

let callCount = 0;
const originalFetch = global.fetch;

global.fetch = async (url, init) => {
  callCount++;
  const isTagCall = String(url).includes("/tags/");
  if (isTagCall && callCount === 1) {
    // Simulate the first attempt at the tag call failing (transient blip).
    return new Response("Service temporarily unavailable", { status: 503 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

const { tagKitSubscriber } = await import("../../lib/kit.ts");

let failed = false;
try {
  const result = await tagKitSubscriber("test@example.com", "12345");
  const parsed = JSON.parse(result);
  if (parsed.ok !== true) {
    failed = true;
    console.log(`FAIL  tagKitSubscriber resolved but with unexpected payload: ${result}`);
  } else if (callCount < 2) {
    failed = true;
    console.log(`FAIL  tagKitSubscriber succeeded without retrying — fetch was only called ${callCount} time(s), so the retry path never ran.`);
  } else {
    console.log(`PASS  tagKitSubscriber recovered after a transient 503 on attempt 1 (fetch called ${callCount} times, final result: ${result})`);
  }
} catch (err) {
  failed = true;
  console.log(`FAIL  tagKitSubscriber threw instead of retrying: ${err.message}`);
}

global.fetch = originalFetch;

console.log("");
if (failed) {
  console.log("❌ tagKitSubscriber does not survive a single transient failure.");
  process.exit(1);
} else {
  console.log("✅ tagKitSubscriber survives one transient failure via retry.");
  process.exit(0);
}
