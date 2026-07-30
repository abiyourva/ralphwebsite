import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { pageMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import "../articles.css";

const article = articles.find((a) => a.slug === "free-isnt-free")!;

export const metadata = pageMetadata({
  title: "Free Isn't Free — Ralph Estep Jr., LPA",
  description: article.description,
  path: "/articles/free-isnt-free",
  image: article.image,
});

const JSON_LD = [
  articleJsonLd({
    title: article.title,
    description: article.description,
    path: "/articles/free-isnt-free",
    datePublished: article.datePublished,
    image: article.image,
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Free Isn't Free", path: "/articles/free-isnt-free" },
  ]),
];

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function FreeIsntFreeArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <header className="page-hero" style={{ paddingBottom: "32px" }}>
        <div className="page-hero-radial" aria-hidden="true" />
        <div className="container-narrow" style={{ position: "relative" }}>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <span className="gold-rule"></span>
          <p className="article-byline">
            By Ralph Estep Jr., LPA ·{" "}
            <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time> ·{" "}
            {article.readTime}
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container-narrow">
          <div className="article-hero-image">
            <Image
              src={article.image!}
              alt="A tarnished brass balance scale tilted off-center on a dark surface, lit dramatically, symbolizing the hidden cost behind every 'free' promise"
              width={1200}
              height={675}
              priority
            />
          </div>
          <div className="article-prose">
            <p>
              An accountant&apos;s warning about the idea that&apos;s winning over a
              generation, and why yelling about it won&apos;t work.
            </p>

            <p>
              I don&apos;t write about politics. I write about money — where it
              goes, why it disappears, and how ordinary people can hold onto
              more of it. For more than thirty years I&apos;ve sat across a desk
              from folks sliding a shoebox of receipts toward me, asking some
              version of the same question: Am I going to be okay?
            </p>

            <p>I&apos;m breaking my own rule today, and I want to tell you why.</p>

            <p>
              Last year, Gallup found that the share of Americans with a
              positive view of capitalism had fallen to 54 percent, the
              lowest they&apos;ve ever recorded. Positive views of socialism sat
              at 39 percent. Among Democrats, socialism now polls better than
              capitalism, 66 to 42. And when you narrow the lens to Americans
              under thirty, the gap gets wider still.
            </p>

            <p>
              Those are not fringe numbers. That&apos;s a plurality of a
              generation looking at the system that made this country the
              wealthiest in human history and concluding it isn&apos;t working
              for them.
            </p>

            <p>
              My first instinct, and maybe yours, was to get angry. To write
              something about how kids today don&apos;t know how good they have
              it. I&apos;ve read a hundred posts like that. I&apos;ve probably shared
              a few.
            </p>

            <p>
              I&apos;ve come to believe that instinct is not just useless. I
              think it&apos;s actively making things worse.
            </p>

            <p>
              So this is going to be a different kind of warning. I&apos;m going
              to spend the first part of it agreeing with the people I&apos;m
              worried about. Then I&apos;m going to spend the rest explaining, as
              carefully as I know how, why the cure they&apos;re reaching for has
              killed every patient it&apos;s ever been given to.
            </p>

            <p>
              If you&apos;re over fifty, read the whole thing, especially the
              part where I say what our generation got wrong.
            </p>

            <p>
              If you&apos;re under thirty, skip to the section with your name on
              it. I wrote it for you, and I promise not to condescend.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part One</p>
              <h2>The grievances are real, and pretending otherwise is a lie</h2>
            </div>

            <p>
              Here&apos;s where most warnings about socialism fall apart. They
              open by telling a struggling twenty-eight-year-old that America
              is the land of opportunity and they just need to work harder.
              They look at their own bank statement, decide the writer is
              either lying or living in a different country, and close the
              tab.
            </p>

            <p>
              I&apos;m not going to do that, because I&apos;ve seen the intake forms.
              I know what&apos;s actually on them.
            </p>

            <ul role="list">
              <li>
                <em>Housing.</em> The National Association of Realtors put
                the median age of a first-time homebuyer at 40 last year. An
                all-time high. When my parents&apos; generation bought their
                first house, that number was in the high twenties. A house is
                no longer something a young couple buys as they start out.
                It&apos;s something they might get to in middle age, if things
                break right.
              </li>
              <li>
                <em>Education debt.</em> Americans collectively owe roughly
                $1.84 trillion in student loans across nearly 43 million
                borrowers. We told an entire generation that a degree was the
                ticket, that the cost didn&apos;t matter because the return was
                guaranteed, and we handed eighteen-year-olds a loan product
                that survives bankruptcy. Then we acted surprised when they
                came out the other side angry.
              </li>
              <li>
                <em>Medical costs.</em> I have prepared returns for families
                whose entire savings, the account they&apos;d been building for
                a decade, was erased by one hospitalization. Not because they
                were irresponsible. Because they got sick in America.
              </li>
              <li>
                <em>The asset gap.</em> This is the one nobody says out loud,
                and it&apos;s the real engine of the resentment. If you owned
                assets over the last fifteen years — a house, a portfolio, a
                business — you did extraordinarily well. If you earned a
                wage, you did okay. A young person who works hard and saves
                diligently watches the finish line move away from him faster
                than he can run toward it. That is a genuinely maddening
                experience, and it is not his fault.
              </li>
            </ul>

            <p>
              So when someone stands up and says the system is rigged
              against you, they are not making that up. They&apos;re describing
              something real. That&apos;s exactly why the message lands.
            </p>

            <p>
              Any argument that doesn&apos;t start by conceding this is not an
              argument. It&apos;s a lecture, and lectures don&apos;t change minds.
              They just make the person delivering them feel better.
            </p>

            <p>Now let me tell you what I think is wrong with the answer.</p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Two</p>
              <h2>We are having two different arguments and calling them one</h2>
            </div>

            <p>
              The word &quot;socialism&quot; is doing an enormous amount of work in
              American conversation right now, and it means two completely
              different things depending on who&apos;s holding it.
            </p>

            <p>
              When most young Americans say &quot;socialism,&quot; polling
              consistently shows they mean something like: Denmark.
              Universal healthcare, tuition-free college, robust unemployment
              insurance, strong labor protections, paid leave. A generous
              safety net.
            </p>

            <p>
              When most people my age hear &quot;socialism,&quot; we mean something
              very specific and very different: state ownership of the means
              of production. The government owns the factories, sets the
              prices, allocates the housing, directs the labor. Private
              property in productive assets is abolished or absorbed.
            </p>

            <p>
              These are not the same system. They&apos;re not even the same
              category. And the confusion between them is why these
              arguments generate so much heat and so little light. One side
              is defending paid family leave while the other side is warning
              about Venezuela, and both of them think the other is insane.
            </p>

            <p>
              So let me be honest about the first one, because honesty is
              what earns the right to be heard on the second.
            </p>

            <p>
              Denmark is not socialist, and the Danes get irritated when we
              say it is. In 2015, standing at Harvard, Denmark&apos;s prime
              minister said it about as plainly as it can be said:
            </p>

            <blockquote className="article-blockquote">
              &quot;I would like to make one thing clear. Denmark is far from a
              socialist planned economy. Denmark is a market economy.&quot;
            </blockquote>

            <p>
              He wasn&apos;t splitting hairs. The Nordic countries run
              aggressively free markets. Denmark ranks among the easiest
              places on earth to start a business and to fire someone — their
              famous &quot;flexicurity&quot; model pairs a strong safety net with
              employment rules more flexible than ours. Sweden abolished its
              inheritance tax in 2004 and its wealth tax in 2007. Sweden has
              a national school voucher program that would be considered
              radically right-wing in an American school board meeting.
            </p>

            <p>
              And here&apos;s the part that matters most: they funded those
              benefits by taxing the middle class heavily, not by soaking the
              rich. Denmark&apos;s value-added tax is 25 percent on nearly
              everything you buy. Their top income tax bracket kicks in at
              roughly one and a half times the average income — the American
              equivalent would be paying the top rate on about $90,000. The
              Nordic model is not &quot;the billionaires pay for it.&quot; The Nordic
              model is &quot;everyone pays for it, including you, especially
              you.&quot;
            </p>

            <p>
              You can make a real case for that trade. I&apos;d argue with parts
              of it, but it&apos;s a legitimate argument between adults about how
              much government we want and what we&apos;re willing to pay. It&apos;s a
              debate about the size of the state.
            </p>

            <p>
              What I&apos;m warning about is a different debate entirely. It&apos;s
              about the nature of the state, about whether there remains a
              private sphere the government does not reach. And on that
              question, the historical record is not ambiguous. It&apos;s not
              even close.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Three</p>
              <h2>The receipts</h2>
            </div>

            <p>
              People love to say &quot;that could never happen here.&quot; Fine. But
              it happened somewhere, to people every bit as decent and
              hardworking as you and me, within the lifetime of people still
              walking around. These are not projections. They&apos;re
              transcripts.
            </p>

            <p>
              In the Soviet Union, housing was not something you bought. It
              was something you waited for. Families spent ten, fifteen,
              twenty years on a list. In the meantime, they lived in
              communal apartments where three or four families shared one
              kitchen and one bathroom, with a schedule posted on the wall
              for who got the stove and when. Your right to live in a city at
              all was governed by an internal passport system. You could not
              simply move to Moscow because there was work in Moscow. You
              needed permission.
            </p>

            <p>
              University graduates did not apply for jobs. They received
              assignments — a system of mandatory job placement. You finished
              your engineering degree and a committee told you which town you
              were going to and how long you were obligated to stay. Usually
              three years. This was not a rumor whispered by exiles. It was
              the published, administered, bureaucratic reality, run by
              clerks with rubber stamps.
            </p>

            <p>
              In East Germany, the Ministry for State Security employed
              roughly ninety thousand people full-time, and ran close to
              twice that many civilian informants. Neighbors. Coworkers.
              Pastors. Spouses. When the files were opened after the Wall
              fell, ordinary Germans stood in line to read their own
              dossiers, and many of them discovered over a cup of coffee
              that the person who had been reporting on them for fifteen
              years had been sitting at their own dinner table. Marriages
              ended in the reading room.
            </p>

            <p>
              In Venezuela, the government expropriated well over a thousand
              companies — farms, food processors, grocery chains, cement,
              steel, banks. Always for a compassionate reason. Always
              announced as a victory for the people. Then came the price
              controls, and then the shortages, because when you criminalize
              charging what a thing costs, the thing stops being made. Then
              came the inflation, which ran into the hundreds of thousands
              of percent, the most efficient method ever devised for
              confiscating a working family&apos;s savings without ever mailing
              them a notice. Grandmothers who had saved their entire lives
              found that their life&apos;s work purchased a bag of flour.
            </p>

            <p>
              Roughly 7.9 million Venezuelans have since left. That is one
              of the largest displacement crises on the planet, out of a
              country that was, within living memory, the wealthiest in
              South America.
            </p>

            <p>
              I want to be precise about what I&apos;m claiming, because
              overclaiming is how you lose people. I am not saying America is
              Venezuela. I&apos;m not saying anyone currently holding office in
              this country wants communal apartments and internal passports.
              That would be absurd, and if I said it, you&apos;d be right to stop
              reading.
            </p>

            <p>
              What I am saying is this: every single one of those countries
              was full of citizens who were completely certain it could not
              happen there, right up until it did. Nobody in Caracas in 1998
              voted for empty shelves. They voted to stop being poor while
              sitting on top of the largest oil reserves on earth. That was
              a reasonable thing to want.
            </p>

            <p className="article-pull">
              Nobody votes for the ending. They vote for the beginning. And
              the beginning always, always sounds compassionate.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Four</p>
              <h2>Why it goes wrong, and it isn&apos;t because the people are bad</h2>
            </div>

            <p>
              This is the part I most want you to hear, because if you think
              these systems failed because bad men ran them, you&apos;ll
              conclude that good men could run them better. That&apos;s the trap.
              That&apos;s the thought that gets tried again every generation.
            </p>

            <p>They fail structurally. Here&apos;s the machinery.</p>

            <p>
              <em>Prices are information, not greed.</em> This is the piece
              almost nobody is taught. When the price of lumber rises, that
              is not a moral event, it&apos;s a signal, telling every mill in
              the country to cut more, every builder to substitute, every
              supplier to ship. Prices are how millions of strangers
              coordinate without ever meeting. Nobody in the world knows how
              to make a pencil from scratch — not the graphite mining, not
              the lacquer chemistry, not the logging — and yet pencils exist,
              cheaply, everywhere, because prices carry the knowledge that no
              single mind can hold.
            </p>

            <p>
              When a government sets prices by decree, it isn&apos;t being
              generous. It&apos;s smashing the gauge and then wondering why the
              engine seizes. That&apos;s not ideology. That&apos;s why the shelves in
              Caracas were empty while the official price of flour remained
              extremely reasonable.
            </p>

            <p>
              <em>The knowledge required does not fit in a building.</em>{" "}
              Even with perfect intentions and perfect honesty, a central
              authority cannot know what four hundred million people need,
              where, in what quantity, this week. That information doesn&apos;t
              exist in one place. It exists distributed across every person
              making a decision about their own life. Central planning fails
              at arithmetic before it ever gets to ethics.
            </p>

            <p>
              <em>Concentrated power selects for the people who want it
              most.</em> Design a system where a committee decides who gets
              the apartment, who gets the surgery, who gets the job. You
              have not eliminated inequality. You&apos;ve relocated it. The
              currency stops being money and becomes proximity to the
              committee. And the people who claw their way onto that
              committee will not, on average, be the gentlest souls in the
              country. This is not cynicism. It&apos;s the observed result,
              every time.
            </p>

            <p>
              <em>And the ratchet only turns one way.</em> Here is the
              mechanism that should frighten you most. When a market system
              fails, you get a recession, an election, and a course
              correction. When a planned system fails, the failure itself
              becomes the argument for more control. The shortages must be
              the fault of hoarders, so we need rationing. The rationing is
              being evaded, so we need enforcement. The enforcement is being
              criticized, so we need to manage the criticism. Each step is a
              logical response to the previous step&apos;s failure, and no
              single step looks like tyranny from the inside.
            </p>

            <p>
              That&apos;s why I keep coming back to the same sentence: the thing
              that makes America correctable is that we can throw the bums
              out. That&apos;s not a small feature. It&apos;s the whole machine.
              It&apos;s the one property that makes every other mistake
              temporary. And it is precisely the property that goes first,
              because a government that owns your housing, your job, and
              your bank account does not have to persuade you of anything.
            </p>

            <p>
              Private property is not a rich person&apos;s toy. It&apos;s the
              mechanism by which a nobody becomes a somebody. It&apos;s how the
              barber ends up owning the building. It&apos;s how a family passes
              something down. Take away the ability to own, and you have not
              created equality. You have created a permanent nation of
              tenants with a single landlord who also writes the laws and
              controls the police.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Five</p>
              <h2>What my generation got wrong</h2>
            </div>

            <p>Now let me turn and face my own.</p>

            <p>
              If you&apos;re around my age and you&apos;ve been nodding along, I need
              you to sit still for this part, because we are not innocent
              here, and the anger we&apos;re seeing did not come from nowhere.
            </p>

            <p>
              We let the ladder get pulled up and called it a market. A
              market is supposed to be a level field where the better
              product wins. What we have in too many sectors is a field
              tilted by people who bought the tilt — regulatory capture,
              licensing rules that exist to keep competitors out, zoning
              that makes it functionally illegal to build the kind of
              housing a young family could afford. When a twenty-five-year-old
              says the game is rigged, they are often describing something
              that is literally true, and the culprit is not the free
              market. It&apos;s the absence of one.
            </p>

            <p>
              We socialized the losses and privatized the gains, then
              wondered why the kids got cynical. When large institutions
              failed spectacularly, they were rescued. When individuals
              failed, they were foreclosed on. You cannot run that play in
              front of a whole generation and then deliver a lecture about
              personal responsibility.
            </p>

            <p>
              We handed eighteen-year-olds non-dischargeable debt and told
              them it was an investment. Then we watched tuition rise to
              consume every dollar of subsidized credit we made available,
              which is exactly what any accountant could have predicted, and
              we called the resulting bill a personal failure of judgment.
            </p>

            <p>
              And we made &quot;conservative&quot; mean yelling instead of building.
              We got very good at explaining why the other side&apos;s answer is
              wrong and very lazy about producing our own. If the honest
              choice a young person sees is between a bad plan and no plan,
              do not act shocked when they pick the bad plan. A bad plan at
              least takes their problem seriously.
            </p>

            <p className="article-pull">You cannot beat something with nothing.</p>

            <p>
              If we want to talk people out of a dangerous cure, we are
              obligated to take the disease seriously. Housing costs,
              medical costs, tuition costs, and an economy where wages
              can&apos;t catch assets — those are our problems to solve, and
              every year we don&apos;t solve them, the case for tearing it all
              down gets stronger. Not because the case is right. Because the
              pain is real.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Six</p>
              <h2>To the twenty-somethings, a letter</h2>
            </div>

            <p>
              I&apos;m going to talk to you directly now, and I&apos;m going to skip
              the part where I tell you how good you have it. That&apos;s not a
              conversation. It&apos;s a door closing.
            </p>

            <p>
              You&apos;re right about a lot. You&apos;re right that housing is out of
              reach in a way it wasn&apos;t for your parents. You&apos;re right that a
              degree cost you more and bought you less. You&apos;re right that
              &quot;get a good job and work hard&quot; was sold to you as a complete
              plan and turned out not to be one. You&apos;re right that some
              people got very rich in ways that had nothing to do with
              building anything. If you&apos;re angry, you&apos;re not being
              irrational. You&apos;re paying attention.
            </p>

            <p>
              So let me not argue with your diagnosis. Let me argue with your
              prescription, and let me do it with one question.
            </p>

            <p className="article-pull">Who, specifically, do you trust with that much power?</p>

            <p>
              Not &quot;the government&quot; in the abstract. Not the version staffed
              by people who agree with you. I mean the actual, existing
              institution — the one whose website crashes, whose agencies
              lose records, whose Congress you rate somewhere below root
              canals. Now imagine that same institution deciding which
              apartment you get, which treatment gets approved, whether your
              business gets a permit, and, because it&apos;s all digital and all
              centralized, whether your account stays open.
            </p>

            <p>
              And then imagine it staffed entirely by the political faction
              you like least. Because sooner or later, it will be. That&apos;s
              how elections work. Every power you build for your side is a
              power you hand to the other side on a schedule.
            </p>

            <p>
              That&apos;s the real question. Not &quot;would this be good if my
              people ran it.&quot; It&apos;s &quot;is this safe when my enemies run it.&quot;
              A structure you&apos;d only accept under a leader you trust is not
              a structure. It&apos;s a hostage situation with good PR.
            </p>

            <p>
              Second thing. Be careful about the difference between the
              feeling of caring and the result of caring. It is very easy to
              confuse &quot;I voted for compassion&quot; with &quot;someone was helped.&quot;
              I&apos;ve spent three decades watching well-intentioned programs,
              and I promise you: intentions do not show up on the balance
              sheet. Outcomes do. Ask always, not what is this called, but
              what did it do.
            </p>

            <p>
              Third, and I say this as a professional, not a partisan: the
              word &quot;free&quot; is the single most expensive word in the English
              language. There is no service a government provides that
              citizens don&apos;t pay for. The only question is whether you pay
              visibly, in a bill, or invisibly, in a tax, a fee, an inflation
              rate, a waiting list, or a shortage. I have never once prepared
              a return where the government&apos;s arithmetic beat the family&apos;s.
            </p>

            <p>
              And watch who actually pays, because it&apos;s never who you&apos;re
              told. Wealth is mobile. It hires attorneys, restructures,
              relocates, and waits. A W-2 paycheck is not mobile. A small
              business with three employees and a leased van is not mobile.
              When the state needs revenue, it does not chase the hardest
              target. It chases the easiest one, and the easiest one is the
              guy who gets up at five and can&apos;t afford to hire someone to
              argue for him. The bill for &quot;tax the rich&quot; is almost always
              mailed to the middle. Ask the Danes. They&apos;ll tell you
              straight.
            </p>

            <p>
              Last thing, and then I&apos;ll get out of your way. Some of what
              you want is achievable inside the system you&apos;re tempted to
              discard. Build more housing: the shortage is largely a legal
              artifact, not a natural one. Fix the pricing opacity in
              medicine. Break the tuition-and-loan cycle. Enforce competition
              instead of protecting incumbents. Those are winnable fights,
              and they don&apos;t require anyone to hand a committee the keys to
              the whole house.
            </p>

            <p>
              I&apos;d genuinely rather spend the next ten years arguing with you
              about how to fix those things than spend them explaining to my
              grandchildren what it was like when a family could own
              something.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <div className="article-part">
              <p className="article-part-label">Part Seven</p>
              <h2>What I&apos;d actually ask of you</h2>
            </div>

            <p>
              I don&apos;t want this to be one more piece of writing that
              generates agreement and changes nothing. So here&apos;s what I&apos;d
              ask, depending on which chair you&apos;re sitting in.
            </p>

            <p>
              <em>If you&apos;re older:</em> Stop forwarding the outrage and
              start answering the question. When a young person tells you
              they can&apos;t afford a house, &quot;kids today&quot; is not a response.
              Have an actual answer about zoning, supply, and cost. Learn
              enough to be useful. And be willing to say plainly that some
              of what they&apos;re angry about is our fault. That single
              sentence will buy you more credibility than an hour of
              argument.
            </p>

            <p>
              <em>If you&apos;re younger:</em> Read the primary sources, not the
              memes, in either direction. Read what it was actually like in
              Prague in 1975 and in Caracas in 2016. Read the strongest case
              for the Nordic model, not a caricature of it, and then read
              what the Danes themselves say they are. Then decide. You&apos;re
              capable of that, and nobody who&apos;s shouting at you is treating
              you like you are.
            </p>

            <p>
              <em>If you&apos;re a person of faith, and I am:</em> notice that
              Scripture holds two things at once without flinching. It
              protects property so firmly that it forbids not just theft but
              the appetite behind it. And it is relentless, page after page,
              about the widow, the orphan, the stranger, and the poor. Those
              are not in tension, but they are two different jobs, and only
              one of them belongs to Caesar. Compassion that is compelled is
              not compassion; it&apos;s a transfer. And when the state takes
              over compassion entirely, the church becomes a redundancy.
              Institutions the state considers redundant tend, eventually,
              to be treated as obstacles.
            </p>

            <p>
              Poland learned this the hard way. Jerzy Popiełuszko was
              thirty-seven years old, a priest who preached about human
              dignity from his pulpit in Warsaw. In 1984, the security
              service beat him to death for it. I&apos;d rather we not relearn
              that lesson.
            </p>

            <p>
              And to everyone: hold the two ideas at once. This country has
              real, serious, structural problems that are crushing real
              people, and the proposed cure has a body count. Both of those
              are true. The moment you drop either one, you become useless
              to this conversation.
            </p>

            <div className="article-tear" aria-hidden="true"></div>

            <h2>The last thing</h2>

            <p>
              You can repair a house with a cracked foundation. It&apos;s
              expensive, it&apos;s slow, it&apos;s aggravating, and it takes people
              who&apos;d rather be doing something else. But it&apos;s possible.
            </p>

            <p>
              What you cannot do is knock it down, stand in the rubble, and
              call that a renovation.
            </p>

            <p>
              I&apos;ve spent thirty years watching families make the same
              discovery in slow motion: the moment you lose control of your
              money is the moment you start losing control of your life. Not
              all at once. Quietly. One reasonable-sounding decision at a
              time.
            </p>

            <p>That&apos;s true for a household. It is a thousand times more true for a country.</p>

            <p style={{ fontStyle: "italic", color: "var(--muted)" }}>
              Do your own research. I did mine, one shoebox of receipts at a
              time.
            </p>

            <div className="card card-pad" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "8px" }}>If this resonated, let&apos;s talk about where your own finances stand.</h3>
              <p style={{ fontSize: "15px", marginBottom: "16px" }}>
                Whatever you make of the politics, the accounting underneath
                it doesn&apos;t change: what you keep depends on decisions made
                long before tax season. Bring your real situation to a free
                discovery call.
              </p>
              <Link href="/schedule/discovery" className="btn btn-navy">
                Book a Free Discovery Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
