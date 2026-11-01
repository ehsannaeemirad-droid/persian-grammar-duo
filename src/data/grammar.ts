export type GrammarPoint = {
  id: string;
  title: string; // English "Can ..." statement
  titleFa: string; // Persian explanation
  category: string;
  structure: string;
  examples: string[];
  gse: number;
  cefr: string;
  unit: string; // grouping for the skill tree
};

export const grammarPoints: GrammarPoint[] = [
  {
    id: "gp-01",
    title: "Can describe beliefs and opinions using verbs of judgement and evaluation in the passive.",
    titleFa: "می‌تواند باورها و نظرات را با استفاده از افعال قضاوت و ارزیابی در حالت مجهول توصیف کند.",
    category: "Verb > Passive",
    structure: "'it's thought/believed/considered/etc. + that' + complement clause",
    examples: [
      "It's believed that he died in Iraq.",
      "It's expected that students will graduate in three years."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Passive & Reporting"
  },
  {
    id: "gp-02",
    title: "Can omit the relative pronoun in defining (restrictive) relative clauses.",
    titleFa: "می‌تواند ضمیر موصولی را در جملات موصولی تعریف‌کننده حذف کند.",
    category: "Clause > Relative",
    structure: "omission of relative pronoun in defining/restrictive clause",
    examples: [
      "He’s the friend (who) I told you about.",
      "That’s the movie (that) I wanted to see."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Relative Clauses"
  },
  {
    id: "gp-03",
    title: "Can use clauses with 'What ...' to emphasise the topic or main point.",
    titleFa: "می‌تواند با جملات «What ...» موضوع یا نکته اصلی را تأکید کند.",
    category: "Clause > Clefting and fronting",
    structure: "fronting: cleft sentences with 'What ...'",
    examples: [
      "What we need now is a good night's sleep.",
      "What I said was that I don't need your help."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Clefting & Emphasis"
  },
  {
    id: "gp-04",
    title: "Can use a range of modals with passive infinitives referring to the present or future.",
    titleFa: "می‌تواند از افعال وجهی مختلف با مصدر مجهول برای حال یا آینده استفاده کند.",
    category: "Verb > Passive / Modal",
    structure: "modals + passive",
    examples: [
      "It could be done.",
      "It could be improved.",
      "The train might be delayed."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Passive & Reporting"
  },
  {
    id: "gp-05",
    title: "Can use clauses with 'It' + 'be' … to emphasise the topic or main point.",
    titleFa: "می‌تواند با ساختار «It + be» موضوع یا نکته اصلی را تأکید کند.",
    category: "Clause > Clefting and fronting",
    structure: "fronting: cleft sentences with 'it + be'",
    examples: [
      "It's the money that keeps me in this job.",
      "It was his accent that made him hard to understand."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Clefting & Emphasis"
  },
  {
    id: "gp-06",
    title: "Can express alternative conditions with 'whether … or not'.",
    titleFa: "می‌تواند شرایط جایگزین را با «whether … or not» بیان کند.",
    category: "Conjunction > Coordinating / Conditional",
    structure: "'whether + VP1 + 'or' VP2 / 'whether or not' + VP",
    examples: [
      "Whether she likes it or not, she's coming with us.",
      "The show starts tomorrow, whether or not it rains."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-07",
    title: "Can refer to certainty and probability using 'certain/likely/due to' with verb phrases.",
    titleFa: "می‌تواند قطعیت و احتمال را با «certain / likely / due to» بیان کند.",
    category: "Phrase > With 'be'",
    structure: "'certain/likely/due' + 'to' + VPinf",
    examples: [
      "He's certain to pass the exam.",
      "The train is likely to be late.",
      "When are they due to arrive?"
    ],
    gse: 59,
    cefr: "B2",
    unit: "Probability & Necessity"
  },
  {
    id: "gp-08",
    title: "Can use 'need' with the passive infinitive to express necessity.",
    titleFa: "می‌تواند با «need + passive infinitive» ضرورت را بیان کند.",
    category: "Verb > Passive / Obligation",
    structure: "'need' + passive infinitive",
    examples: [
      "The report needs to be completed this week.",
      "Homework needs to be handed in today."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Probability & Necessity"
  },
  {
    id: "gp-09",
    title: "Can soften orders and requests by using verbs like 'thought', 'wondered', etc. in the past tense.",
    titleFa: "می‌تواند دستورات و درخواست‌ها را با افعال گذشته مانند thought و wondered نرم‌تر کند.",
    category: "Verb > Tense",
    structure: "softening orders and requests with past tense",
    examples: [
      "I thought perhaps you could help me.",
      "We hoped you'd come to our party.",
      "I was wondering if you could get me a ticket for the concert?"
    ],
    gse: 59,
    cefr: "B2",
    unit: "Softening & Politeness"
  },
  {
    id: "gp-10",
    title: "Can use verb phrases with 'to' + infinitive as subject and complement.",
    titleFa: "می‌تواند عبارت‌های مصدری با to را به عنوان فاعل و مکمل به کار ببرد.",
    category: "Phrase > With infinitive",
    structure: "VPinf as subject and complement",
    examples: [
      "My dream is to live in New York.",
      "The effect of the drug was to give him a headache."
    ],
    gse: 59,
    cefr: "B2",
    unit: "Infinitives & Gerunds"
  },
  {
    id: "gp-11",
    title: "Can express negative purpose with 'so as/in order not to'.",
    titleFa: "می‌تواند هدف منفی را با «so as / in order not to» بیان کند.",
    category: "Conjunction > Cause and result",
    structure: "so as/in order + 'not to' + VPinf for negative purpose",
    examples: [
      "In order not to seem stupid, he didn't say anything.",
      "I came in very quietly, so as not to wake anyone."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Purpose & Result"
  },
  {
    id: "gp-12",
    title: "Can report orders, requests and advice with infinitive clauses.",
    titleFa: "می‌تواند دستورات، درخواست‌ها و توصیه‌ها را با بندهای مصدری گزارش دهد.",
    category: "Clause > Reported speech",
    structure: "reported orders/requests/advice with 'to' + VPinf",
    examples: [
      "She told me not to do it.",
      "He warned us not to be late.",
      "She encouraged him to study."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Reported Speech"
  },
  {
    id: "gp-13",
    title: "Can use 'while', 'whereas' and 'whilst' (Br Eng) to contrast and compare actions and situations.",
    titleFa: "می‌تواند با while، whereas و whilst برای تضاد و مقایسه استفاده کند.",
    category: "Conjunction > Concession and contrast",
    structure: "'while/whilst/whereas' for contrast",
    examples: [
      "You enjoy running, whereas I find it very boring.",
      "While(st) I sympathize with you, I can't forget about what you did."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-14",
    title: "Can express prohibition in the present or future with 'forbid' and '(not) allow'.",
    titleFa: "می‌تواند ممنوعیت را با forbid و (not) allow بیان کند.",
    category: "Verb > Passive / Infinitive",
    structure: "'forbid/not allow' + person + 'to' + VPinf",
    examples: [
      "I forbid you to speak to him.",
      "We won't be allowed to take pictures."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Probability & Necessity"
  },
  {
    id: "gp-15",
    title: "Can use the future continuous with reference to actions in progress at a specific time in the future.",
    titleFa: "می‌تواند از future continuous برای اقدامات در حال انجام در زمان مشخص آینده استفاده کند.",
    category: "Verb > Tense",
    structure: "future continuous",
    examples: [
      "This time tomorrow I’ll be flying to Rio.",
      "I’ll be driving home from work at 5 p.m. this evening."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Advanced Tenses"
  },
  {
    id: "gp-16",
    title: "Can correctly use defining (restrictive) and non-defining (non-restrictive) relative clauses.",
    titleFa: "می‌تواند جملات موصولی تعریف‌کننده و غیرتعریف‌کننده را به درستی به کار ببرد.",
    category: "Clause > Relative",
    structure: "defining vs non-defining relative clauses",
    examples: [
      "I told my sister, who already knew what happened.",
      "Tell only the people who need the information."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Relative Clauses"
  },
  {
    id: "gp-17",
    title: "Can talk about past plans and intentions using '(not) meant/supposed to' + infinitive.",
    titleFa: "می‌تواند درباره برنامه‌ها و نیت‌های گذشته با meant/supposed to صحبت کند.",
    category: "Verb > Passive / Infinitive",
    structure: "'(not) meant/supposed to' + infinitive",
    examples: [
      "It was meant to be fun.",
      "He wasn't supposed to do that."
    ],
    gse: 60,
    cefr: "B2",
    unit: "Softening & Politeness"
  },
  {
    id: "gp-18",
    title: "Can emphasise a statement by adding 'do' or 'did'.",
    titleFa: "می‌تواند با اضافه کردن do یا did یک جمله را تأکید کند.",
    category: "Verb > Auxiliary",
    structure: "additional auxiliary 'do' or 'did' for stress or emphasis",
    examples: [
      "He does look nice in his new suit.",
      "I didn't get to see John, but I did see his mother."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Clefting & Emphasis"
  },
  {
    id: "gp-19",
    title: "Can make statements about appearance using 'seem/appear' (+ 'like/that') with complement clauses.",
    titleFa: "می‌تواند درباره ظاهر با seem/appear + that/like صحبت کند.",
    category: "Clause > Dependent",
    structure: "'seems/appears/looks' (+ 'like/that') + complement clause",
    examples: [
      "It looks like he isn't coming.",
      "It appears that John has misunderstood."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Reported Speech"
  },
  {
    id: "gp-20",
    title: "Can use adverbials such as 'however', 'on the other hand', and 'though' to express concession.",
    titleFa: "می‌تواند با however، on the other hand و though تضاد و امتیاز را بیان کند.",
    category: "Conjunction > Concession and contrast",
    structure: "concessive adverbials",
    examples: [
      "I don't earn much - however, I have plenty of free time.",
      "We'll get there quicker by train. On the other hand, the bus is much cheaper."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-21",
    title: "Can describe past beliefs and opinions using 'it was' + passive forms of verbs of judgement and evaluation.",
    titleFa: "می‌تواند باورها و نظرات گذشته را با it was + مجهول بیان کند.",
    category: "Verb > Passive / Tense",
    structure: "it's/it was thought/believed/considered/etc. (that) + complement clause",
    examples: [
      "It was expected that women would get married in their 20s.",
      "It was thought that all the records had been destroyed."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Passive & Reporting"
  },
  {
    id: "gp-22",
    title: "Can use non-defining (non-restrictive) relative clauses to make a comment.",
    titleFa: "می‌تواند با جملات موصولی غیرتعریف‌کننده نظر یا توضیح اضافه کند.",
    category: "Clause > Relative",
    structure: "non-defining relative clause for comment",
    examples: [
      "He was late, which was unusual.",
      "It's raining, which is really annoying."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Relative Clauses"
  },
  {
    id: "gp-23",
    title: "Can express past intentions and plans with 'thinking of' and verbs in the gerund.",
    titleFa: "می‌تواند نیت‌ها و برنامه‌های گذشته را با thinking of + gerund بیان کند.",
    category: "Phrase > With gerund",
    structure: "NP + 'was/were thinking of' + VPgerund",
    examples: [
      "We were thinking of selling the house.",
      "Were you thinking of driving there?"
    ],
    gse: 61,
    cefr: "B2",
    unit: "Infinitives & Gerunds"
  },
  {
    id: "gp-24",
    title: "Can construct phrases with '(not) worth ...' and '(no) point ...' to express the (lack of) usefulness or value of an action.",
    titleFa: "می‌تواند با worth و point مفید بودن یا نبودن یک عمل را بیان کند.",
    category: "Phrase > With gerund",
    structure: "'(not) worth / (no) point (in)' + VPgerund",
    examples: [
      "There's no point in talking about it.",
      "It's not worth repairing such an old car."
    ],
    gse: 61,
    cefr: "B2",
    unit: "Infinitives & Gerunds"
  },
  {
    id: "gp-25",
    title: "Can use 'ought(n't) to' to offer or ask for advice or suggestions.",
    titleFa: "می‌تواند با ought to توصیه و پیشنهاد بدهد یا بپرسد.",
    category: "Modal verb > Obligation",
    structure: "'ought(n't)' to for advice or suggestions",
    examples: [
      "You ought to go to a doctor.",
      "He oughtn't to drink so much.",
      "Where ought we to go?"
    ],
    gse: 62,
    cefr: "B2",
    unit: "Probability & Necessity"
  },
  {
    id: "gp-26",
    title: "Can use 'I wish/if only …' to express regrets and wishes about the past.",
    titleFa: "می‌تواند با I wish / if only پشیمانی و آرزو درباره گذشته را بیان کند.",
    category: "Modal verb > Wishes",
    structure: "past regrets with 'I wish/if only'",
    examples: [
      "If only I’d worked harder.",
      "I wish we’d bought that house."
    ],
    gse: 62,
    cefr: "B2",
    unit: "Wishes & Regrets"
  },
  {
    id: "gp-27",
    title: "Can make complex comparisons between verb/noun phrases.",
    titleFa: "می‌تواند مقایسه‌های پیچیده بین عبارت‌های فعلی و اسمی بسازد.",
    category: "Adjective > Comparison",
    structure: "VP1/NP1 + comparative adjective + 'than' + VP2/NP2",
    examples: [
      "Being happy is more important than making money.",
      "The loss of his job made a bigger difference than the end of his marriage."
    ],
    gse: 62,
    cefr: "B2",
    unit: "Comparisons"
  },
  {
    id: "gp-28",
    title: "Can speak about information acquired from others using 'hear' + '(that +)' complement clause.",
    titleFa: "می‌تواند اطلاعات شنیده شده را با hear + that گزارش دهد.",
    category: "Clause > Reported speech",
    structure: "'hear' + '(that)' + complement clause",
    examples: [
      "I hear that John and Susie are getting married.",
      "I've heard that Martin's lost his job."
    ],
    gse: 62,
    cefr: "B2",
    unit: "Reported Speech"
  },
  {
    id: "gp-29",
    title: "Can use 'as soon as' with the past simple and past perfect.",
    titleFa: "می‌تواند as soon as را با گذشته ساده و گذشته کامل به کار ببرد.",
    category: "Conjunction > Time",
    structure: "'as soon as' + past simple + past perfect",
    examples: [
      "I handed the work in as soon as I had finished it.",
      "As soon as she'd eaten, she fell asleep."
    ],
    gse: 62,
    cefr: "B2",
    unit: "Advanced Tenses"
  },
  {
    id: "gp-30",
    title: "Can use the past perfect continuous in a range of common situations.",
    titleFa: "می‌تواند past perfect continuous را در موقعیت‌های رایج به کار ببرد.",
    category: "Verb > Tense",
    structure: "past perfect continuous",
    examples: [
      "I'd been living in London for three years when I met her.",
      "How long had you been waiting when I arrived?"
    ],
    gse: 62,
    cefr: "B2",
    unit: "Advanced Tenses"
  },
  {
    id: "gp-31",
    title: "Can use the past perfect with adverbial clauses of time.",
    titleFa: "می‌تواند past perfect را با بندهای قیدی زمان به کار ببرد.",
    category: "Verb > Tense / Time",
    structure: "past perfect with adverbial clauses of time",
    examples: [
      "I remembered it after I’d already left home.",
      "By the time I got there she’d gone."
    ],
    gse: 63,
    cefr: "B2",
    unit: "Advanced Tenses"
  },
  {
    id: "gp-32",
    title: "Can use 'need' with verbs in the gerund to express necessity.",
    titleFa: "می‌تواند با need + gerund ضرورت را بیان کند.",
    category: "Modal / Gerund",
    structure: "'need' + VPgerund",
    examples: [
      "My hair needs cutting.",
      "The children need picking up."
    ],
    gse: 63,
    cefr: "B2",
    unit: "Infinitives & Gerunds"
  },
  {
    id: "gp-33",
    title: "Can use a range of complex conjunctions in conditional statements (all three types).",
    titleFa: "می‌تواند از حروف ربط پیچیده در جملات شرطی استفاده کند.",
    category: "Clause > Conditional",
    structure: "on condition that / as long as / providing that / provided that",
    examples: [
      "You can borrow the car on condition that you drive carefully.",
      "I'll help you as long as you try your best."
    ],
    gse: 64,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-34",
    title: "Can use gerunds in the passive form as complement.",
    titleFa: "می‌تواند از gerund مجهول به عنوان مکمل استفاده کند.",
    category: "Verb > Passive / Gerund",
    structure: "NP + VP + VPgerund (passive)",
    examples: [
      "My mother loves being taken out.",
      "Children enjoy being read to."
    ],
    gse: 64,
    cefr: "B2",
    unit: "Infinitives & Gerunds"
  },
  {
    id: "gp-35",
    title: "Can use noun phrases in place of verb phrases in formal written language.",
    titleFa: "می‌تواند در زبان نوشتاری رسمی از عبارت‌های اسمی به جای فعلی استفاده کند (nominalisation).",
    category: "Phrase > Clefting and fronting",
    structure: "noun phrases instead of verb phrases (nominalisation)",
    examples: [
      "The change in the weather surprised us.",
      "Marian was puzzled by the disappearance of the money."
    ],
    gse: 64,
    cefr: "B2",
    unit: "Clefting & Emphasis"
  },
  {
    id: "gp-36",
    title: "Can use the past perfect passive.",
    titleFa: "می‌تواند past perfect passive را به کار ببرد.",
    category: "Verb > Passive / Tense",
    structure: "past perfect passive",
    examples: [
      "The goods had already been stolen.",
      "It had all been said before.",
      "The show had been cancelled."
    ],
    gse: 64,
    cefr: "B2",
    unit: "Passive & Reporting"
  },
  {
    id: "gp-37",
    title: "Can use 'will' + infinitive for orders and instructions.",
    titleFa: "می‌تواند با will + infinitive دستور و راهنمایی بدهد.",
    category: "Verb > Imperative / Modal",
    structure: "'he/you/they will' + VPinf for instructions",
    examples: [
      "You will do as you are told.",
      "They will wait till they're called."
    ],
    gse: 65,
    cefr: "B2",
    unit: "Softening & Politeness"
  },
  {
    id: "gp-38",
    title: "Can use 'as if/as though' with the present simple to refer to what appears to be the case.",
    titleFa: "می‌تواند با as if / as though + حال ساده درباره آنچه به نظر می‌رسد صحبت کند.",
    category: "Clause > Conditional",
    structure: "'as if/as though' + complement clause (present)",
    examples: [
      "It looks as though they're not coming."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-39",
    title: "Can express purpose using ‘so as to’ with infinitive clauses.",
    titleFa: "می‌تواند هدف را با so as to + infinitive بیان کند.",
    category: "Conjunction > Cause and result",
    structure: "'so as to' + VPinf for purpose",
    examples: [
      "I got up at 6:00 so as to be on time.",
      "So as to keep fit, I go for a run every morning."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Purpose & Result"
  },
  {
    id: "gp-40",
    title: "Can use adverbial phrases to make comments.",
    titleFa: "می‌تواند با عبارت‌های قیدی نظر و توضیح بدهد.",
    category: "Adverb > Modifier",
    structure: "adverbial phrases for comment",
    examples: [
      "Practically speaking …",
      "At the end of the day...",
      "Taking the long view…"
    ],
    gse: 66,
    cefr: "B2",
    unit: "Clefting & Emphasis"
  },
  {
    id: "gp-41",
    title: "Can use 'shall' + infinitive for formal first-person statements about the future.",
    titleFa: "می‌تواند با shall + infinitive جملات رسمی اول‌شخص درباره آینده بسازد.",
    category: "Verb > Tense / Modal",
    structure: "'I/we shall' + VPinf",
    examples: [
      "I shall do my best."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Softening & Politeness"
  },
  {
    id: "gp-42",
    title: "Can express regrets and preferences with 'would rather/it's time' with past tense clauses.",
    titleFa: "می‌تواند پشیمانی و ترجیح را با would rather / it's time + گذشته بیان کند.",
    category: "Modal verb > Wishes",
    structure: "'would rather/it’s time' + VP (past)",
    examples: [
      "I’d rather we stayed in tonight.",
      "I’d rather we went to the cinema.",
      "It’s time we left."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Wishes & Regrets"
  },
  {
    id: "gp-43",
    title: "Can omit subject + 'be' after ‘if’ in fixed expressions.",
    titleFa: "می‌تواند در عبارات ثابت بعد از if فاعل و be را حذف کند.",
    category: "Clause > Conditional",
    structure: "'if' + adjective/NP/PP with omission of pronoun + 'be'",
    examples: [
      "if necessary",
      "if any",
      "if anything"
    ],
    gse: 66,
    cefr: "B2",
    unit: "Conditionals & Contrast"
  },
  {
    id: "gp-44",
    title: "Can make complex comparisons between clauses.",
    titleFa: "می‌تواند مقایسه‌های پیچیده بین بندها بسازد.",
    category: "Adjective > Comparison",
    structure: "clause1 + comparative adjective + 'than' + clause2",
    examples: [
      "There's more work to do than we have time for.",
      "She was more concerned with getting the job done than with doing it well."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Comparisons"
  },
  {
    id: "gp-45",
    title: "Can use the future perfect with reference to actions to be completed by a specific time in the future.",
    titleFa: "می‌تواند future perfect را برای اقداماتی که تا زمان مشخصی در آینده کامل می‌شوند به کار ببرد.",
    category: "Verb > Tense",
    structure: "future perfect",
    examples: [
      "I’ll have finished it by Saturday.",
      "The match won’t have finished by 8 p.m."
    ],
    gse: 66,
    cefr: "B2",
    unit: "Advanced Tenses"
  }
];

export const units = [
  "Passive & Reporting",
  "Relative Clauses",
  "Clefting & Emphasis",
  "Conditionals & Contrast",
  "Probability & Necessity",
  "Softening & Politeness",
  "Infinitives & Gerunds",
  "Purpose & Result",
  "Reported Speech",
  "Advanced Tenses",
  "Wishes & Regrets",
  "Comparisons"
] as const;

export type UnitName = (typeof units)[number];
