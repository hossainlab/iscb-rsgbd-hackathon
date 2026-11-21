/* Terms of participation.
   Adapted for RSG Bangladesh from the structure of a comparable hackathon's
   terms. Anything in [square brackets] is a placeholder the organisers must
   fill in before this page is announced. */

export const termsMeta = {
  title: "Terms of participation",
  kicker: "Legal",
  lede: "Who can take part, how teams are formed, how work is submitted, evaluated and recognised, and the rights and obligations of participants. By submitting your registration you accept these Terms (Article 1).",
  updated: "[date to be set]",
  note: "This document is published for information and will be the version in force once the organisers confirm the items marked in brackets. Where it refers to the Code of Conduct, that document applies in full.",
};

export type Article = { id: string; n: number; title: string; intro?: string; items: string[] };

export const termsIntro = {
  id: "intro",
  title: "Introduction",
  paragraphs: [
    "The 1st Bioinformatics Hackathon 2026 (the “Hackathon”) is organised by RSG Bangladesh, the Regional Student Group of the ISCB Student Council [together with any co-organising institutions to be named], referred to below as the “Organiser”.",
    "The Hackathon brings students and early-career researchers together to apply bioinformatics, computational biology and artificial intelligence tools — among them AlphaFold and related structure prediction methods — to scientifically grounded questions of relevance to Bangladesh.",
    "These Terms set out the conditions of participation, the rules for developing and submitting work, the evaluation procedure, and the rights and obligations of everyone taking part. They are read together with the Code of Conduct, which applies to all participants, mentors, judges and organisers.",
  ],
};

export const articles: Article[] = [
  {
    id: "eligibility",
    n: 1,
    title: "Eligibility and conditions of participation",
    items: [
      "The Hackathon is open to students, researchers and professionals with an interest in biology, data analysis and computational tools. [State here whether participation is limited to students, and to which institutions, if any.]",
      "Participation is voluntary and free of charge.",
      "Each person registers individually, using the registration form published on the official website.",
      "By registering, each participant confirms that they have read and accept these Terms and the Code of Conduct.",
      "Participants must give true, accurate and current information. The Organiser may ask for confirmation of anything stated in a registration where that is necessary for the fair conduct of the event.",
      "A participant may belong to only one team and contribute to only one submission.",
      "Participation creates no employment, agency or other contractual relationship with the Organiser beyond these Terms.",
      "Participants must be at least 18 years of age [or, if the Organiser decides otherwise: at least 16, with written consent from a parent or guardian].",
    ],
  },
  {
    id: "teams",
    n: 2,
    title: "Formation and composition of teams",
    items: [
      "Work is carried out and presented by teams. Individual submissions are not accepted.",
      "Each team has at least three and at most five members [to be confirmed], and teams combining different scientific backgrounds are encouraged.",
      "At registration, a participant may either name an existing team or ask to be placed in one.",
      "The Organiser will try to place individual registrants in teams according to background, skills and stated preferences, but cannot guarantee a place for everyone.",
      "Each team names a representative as the point of contact for the Organiser. Being the representative confers no additional ownership of the team's work.",
      "Final team composition is confirmed by the Organiser. Later changes require the Organiser's approval and may not be used to circumvent these Terms.",
    ],
  },
  {
    id: "registration",
    n: 3,
    title: "Registration",
    items: [
      "Registration is online, within the deadline announced on the official website. [Registration opens and closes on dates to be announced.]",
      "The form asks for, among other things: name and contact details, role and institution, field of study or work, prior experience with bioinformatics and computational tools, and an existing team name or a request to be placed in one.",
      "Submitting the form does not by itself confirm participation. The Organiser may check registrations for completeness and accuracy and may ask for corrections within a reasonable time.",
      "Places may be limited by the capacity of the venue and the mentoring available. Any cap, and how places are allocated if demand exceeds it, is announced before registration opens.",
    ],
  },
  {
    id: "topics",
    n: 4,
    title: "Topics and the work expected",
    items: [
      "Each team is assigned one of the eleven topics published on the official website. The assignment is made by the Organiser at the briefing.",
      "Within its topic, the team formulates its own research question, chooses its own methodology and defines its own deliverable. The indicative questions published for each topic are illustrative only: they are not requirements, they do not restrict the scope of the work, and they do not oblige a team to use any particular protein, organism, dataset or tool.",
      "The team's work must be substantively connected to its assigned topic and rest on a defensible methodological approach.",
      "A finished or commercially usable product is not expected. A research or computational approach is a valid submission, provided the methodology, the results, the limitations and the possible application are presented clearly.",
      "A result that is negative, null or inconclusive is a valid outcome and is evaluated on the strength of the reasoning behind it.",
    ],
  },
  {
    id: "tools",
    n: 5,
    title: "Use of computational tools and artificial intelligence",
    items: [
      "Teams may use bioinformatics, computational biology and artificial intelligence tools and databases, including those listed in the toolbox on the official website.",
      "Each participant is responsible for using every tool and service in accordance with its own terms of use, licences, technical limits and policies.",
      "Particular care is needed with AlphaFold Server: access to it and the use of its outputs are subject to restrictions, including on non-commercial use, further processing and redistribution. Check the terms that apply to the service and to the version used.",
      "Teams must state transparently: the tools and AI models used; the databases and external sources; the main input data and analysis parameters; the method of processing and interpreting the results; and the limitations of the tools and the uncertainty of the predictions.",
      "Results must be assessed critically and supported by appropriate scientific sources and, where possible, by validation data.",
      "Computational models and AI applications do not replace scientific substantiation or experimental confirmation.",
      "Predictions and proposed approaches are of a research nature and must not be presented as clinically validated or as suitable for diagnostic or therapeutic use.",
      "Using tools or data unlawfully, in breach of a third party's rights, or in a way that creates an unacceptable risk to health, safety or the environment is prohibited and is grounds for immediate exclusion.",
    ],
  },
  {
    id: "process",
    n: 6,
    title: "Conduct of the event",
    items: [
      "The timetable, the submission deadlines, the length of presentations and the format of each stage are announced by the Organiser. [Event dates and format to be announced.]",
      "Participants must keep to the deadlines and to the instructions of the organisers. Late submissions are not accepted, except where the Organiser recognises a technical failure or other cause beyond the team's control.",
      "The Organiser may adjust procedural details where this is needed for the event to run smoothly, provided that teams continue to be treated equally and the evaluation remains transparent.",
    ],
  },
  {
    id: "mentoring",
    n: 7,
    title: "Mentoring",
    items: [
      "Teams receive scientific and technical guidance from mentors: scientific mentors for the biological question and its interpretation, technical mentors for running the tools and reading the confidence scores, and mentors combining both.",
      "Mentors are matched to teams by the Organiser according to the teams' needs and the mentors' expertise and availability.",
      "The role of a mentor is advisory. Mentors may point out issues, suggest methods and name sources.",
      "Responsibility for the methodology, the results and the submission rests with the team.",
      "Mentors are not co-authors of a team's work by virtue of the advice they give, and waive any intellectual property claim arising from that advice.",
    ],
  },
  {
    id: "submission",
    n: 8,
    title: "Submission and presentation",
    items: [
      "Each team submits its work by the published deadline, in the format announced by the Organiser.",
      "The presentation lasts ten minutes and should cover, as a minimum: the team and the idea; the scientific problem and the research question; the approach, including workflow, input data and validation; and the tools used, the results, how they were assessed and what the next steps would be.",
      "Every team must report the tools, databases and external sources it used, together with its key inputs and parameters.",
      "Teams must make clear which parts of the work are their own contribution and which come from third-party sources, existing models or automated tools.",
      "The Organiser may ask for supporting material — a notebook, figures, references — only as far as it is needed for evaluation.",
      "Teams are expected to attend the presentation session and to answer questions from the judges.",
    ],
  },
  {
    id: "committees",
    n: 9,
    title: "Organisation and judging",
    items: [
      "The Organising Committee coordinates the event, manages registrations, forms the teams, keeps participants informed and applies these Terms.",
      "The Scientific Committee defines and maintains the topics, provides scientific guidance and supports the drafting of the evaluation criteria.",
      "The Jury evaluates the submissions against the published criteria and decides the result.",
      "Members of the Jury act impartially. A member with an actual or potential conflict of interest must declare it and withdraw from evaluating the team concerned; in that case the average of the other judges' scores stands in for the withdrawn score.",
      "The membership of these bodies is published on the official website.",
    ],
  },
  {
    id: "evaluation",
    n: 10,
    title: "Evaluation criteria and procedure",
    items: [
      "Evaluation uses the published criteria, applied in the same way to every team: relevance to the assigned topic, scientific and technical validity, feasibility and potential impact (35%); innovation and originality (25%); sound and meaningful use of AI tools and the quality and documentation of the open-source code produced (20%); and the quality of the presentation and documentation (20%).",
      "Each criterion is scored from 0 to 10 and the final score is the weighted sum. Where there are several judges, a team's score is the average of their weighted scores.",
      "In the event of a tie, the team with the higher score on criterion A ranks first. If the tie remains, criterion D decides. If it still remains, the Jury decides by a reasoned decision based on the published criteria.",
      "Scores and the resulting ranking are recorded by the Organiser.",
      "Objections may be lodged about a clear procedural error, within the time limit announced before the evaluation. Decisions of scientific and technical judgement are final.",
      "The criteria, weights and tie-break procedure are published before evaluation begins and are not changed afterwards.",
    ],
  },
  {
    id: "awards",
    n: 11,
    title: "Recognition and awards",
    items: [
      "The Organiser recognises the highest-scoring teams. [The form of recognition — certificates, awards or prizes, and their value — is to be confirmed and will be published before registration closes.]",
      "Certificates of participation may be issued to participants and mentors.",
      "The Jury may recommend that an award be withheld if no submission reaches a minimum standard of scientific quality, where that standard was published in advance.",
      "Any award is made to the team as a whole.",
    ],
  },
  {
    id: "ip",
    n: 12,
    title: "Intellectual property and open source",
    items: [
      "Participants keep the intellectual property rights in the work, code, analyses and presentations they create during the Hackathon. Participation transfers no rights to the Organiser, the mentors or any supporter.",
      "Code produced during the Hackathon is developed in a public repository under the hackathon's GitHub organisation and released under an open-source licence — the MIT licence, unless the team documents another OSI-approved licence in its repository. This reflects the Code of Conduct.",
      "Everyone who contributed to a submission is credited in its README, including contributions of documentation, testing, figures and domain knowledge.",
      "Participants grant the Organiser a non-exclusive, royalty-free, worldwide licence to use, present, publish and reproduce the submissions, presentations and summaries for reporting, education and the promotion of the Hackathon and of RSG Bangladesh.",
      "Participants must respect the rights of other teams, mentors, partners and third parties. Presenting another person's work as one's own is prohibited.",
      "The Organiser is not obliged to register, protect or commercially exploit any submission, and takes no responsibility for doing so.",
      "Presenting work in public may affect the possibility of protecting it later. Participants should take whatever steps they consider necessary in good time.",
    ],
  },
  {
    id: "third-party",
    n: 13,
    title: "Third-party data, software and material",
    items: [
      "Teams may use third-party data, databases, publications, software, libraries and models where the applicable licences permit it.",
      "Teams must comply with those licences, including any restriction on modification, redistribution, commercial use or publication of results.",
      "External sources must be cited, naming the author, provider or publication.",
      "Confidential information, unlawfully obtained data and protected personal data may not be used.",
      "Human data from which a person could be identified, directly or indirectly, may not be used. Only fully anonymised or synthetic data from open, official scientific databases are permitted.",
      "The Organiser may require material to be removed or replaced where there are reasonable grounds to believe its use infringes rights or legal restrictions.",
    ],
  },
  {
    id: "responsibility",
    n: 14,
    title: "Declarations and responsibility",
    items: [
      "Each team is responsible for the accuracy of what it declares and for the content it submits and presents.",
      "By submitting, a team declares that, to the best of its knowledge: the work contains a genuine contribution by the team; significant external sources are cited; the use of data, software and tools is permitted; no third-party rights are knowingly infringed; nothing confidential is disclosed; and no computational prediction is presented as a confirmed scientific or clinical result.",
      "The Organiser does not guarantee the scientific accuracy, effectiveness, safety or applicability of any submission.",
      "Any further use of a submission by its authors is at their own responsibility.",
      "The Organiser is not liable for technical faults, loss of connectivity, failures of third-party platforms or computational services, or other problems beyond its reasonable control that affect a team's work or its submission.",
    ],
  },
  {
    id: "conduct",
    n: 15,
    title: "Conduct and exclusion",
    items: [
      "The Code of Conduct applies in full to every participant, mentor, judge, organiser and guest, in every hackathon space and before, during and after the event. It is published in the hackathon repository.",
      "Grounds for exclusion include: a material breach of these Terms or of the Code of Conduct; plagiarism or appropriation of another's work; materially false or misleading information; falsification of data or results; unauthorised use of software, data or tools; and any attempt to influence the evaluation improperly.",
      "Depending on the seriousness of the breach, the Organiser may issue a warning, require corrective action, or exclude a participant or a team.",
      "Before a decision to exclude is taken, the person concerned is given the opportunity to respond, unless immediate action is needed to protect the safety or the rights of others.",
      "Decisions are reasoned and are recorded by the Organiser.",
      "Reports of conduct concerns are handled as described in the Code of Conduct. [Conduct contacts to be named.]",
    ],
  },
  {
    id: "publication",
    n: 16,
    title: "Publicity and use of the results",
    items: [
      "The event may be photographed or recorded for reporting and outreach by RSG Bangladesh and the ISCB Student Council. A participant who does not wish to appear in published photographs or video should tell an organiser at registration, and that will be respected.",
      "The Organiser may publish the names of teams and participants, the titles and summaries of submissions, and images from the event.",
      "Participants are free to publish their own work, subject to the licences of the data and tools they used and to the Code of Conduct's rules on credit and authorship.",
    ],
  },
  {
    id: "privacy",
    n: 17,
    title: "Personal data",
    items: [
      "The Organiser collects the information given at registration in order to run the event: to confirm eligibility, to form teams, to match mentors, to communicate with participants and to issue certificates.",
      "Access is limited to the organisers and, where necessary, to the mentors and judges working with a team.",
      "Personal data are not sold, and are not shared with third parties except where needed to run the event or where required by law.",
      "Registration data are kept for [retention period to be set] and then deleted or anonymised.",
      "Participants may ask to see, correct or delete their data by writing to [contact email to be added].",
    ],
  },
  {
    id: "final",
    n: 18,
    title: "Amendment and final provisions",
    items: [
      "The Organiser may amend these Terms where that is needed for the lawful and orderly running of the event. Amendments are published on the official website and take effect when published.",
      "If a provision of these Terms is found to be invalid, the remaining provisions continue to apply.",
      "These Terms are governed by the law of Bangladesh, and the courts of [city to be set] have jurisdiction over any dispute arising from them.",
      "Questions about these Terms may be sent to [contact email to be added].",
    ],
  },
];
