// All page copy lives here. Edit text in this file, not in the components.

export const REPO_URL = "https://github.com/hossainlab/iscb-rsgbd-hackathon";

export const nav = [
  { href: "#guide", label: "Tools guide" },
  { href: "#challenges", label: "Topics" },
  { href: "#presentation", label: "Final presentation" },
  { href: "#evaluation", label: "Evaluation" },
  { href: "#toolbox", label: "Toolbox" },
  { href: "#faq", label: "FAQ" },
];

/* Links to other pages, shown beside the section links in the nav. */
export const pageLinks = [{ href: "/terms/", label: "Rules" }];

export const facts = [
  { value: "11", label: "topics, one per team" },
  { value: "7", label: "steps from sequence to structure" },
  { value: "10 min", label: "for the final presentation" },
  { value: "41", label: "tools and databases, all usable from Colab" },
];

export type Link = { label: string; href: string };
export type Command = { env: string; code: string; note: string };
export type Step = {
  icon: string;
  title: string;
  body: string;
  points: string[];
  caution?: string;
  fit?: { goodTitle: string; good: string[]; otherTitle: string; other: string[] };
  commands?: Command[];
  visual?: "plddt";
  links: Link[];
};

export const steps: Step[] = [
  {
    icon: "help",
    title: "Frame the question",
    body: "Begin from a clear, testable biological question — not from the tool. Decide which protein or complex you are interested in, what you will compare it with, and what you will look at to answer the question.",
    points: [
      "Choose a target and a reference to compare against, for example a wild-type protein and a variant.",
      "Write down in advance what would count as evidence — and what would not.",
      "Keep the scope small: one well-supported question is enough.",
    ],
    fit: {
      goodTitle: "A good fit for structure prediction",
      good: [
        "The 3D structure of a protein or a complex.",
        "Where a residue sits relative to an active site or an interface.",
        "Structural hypotheses where no experimental structure exists.",
      ],
      otherTitle: "Needs other methods too",
      other: [
        "The effect of a point mutation on stability or function.",
        "The binding affinity of a drug or an inhibitor.",
        "Protein motions and dynamics.",
      ],
    },
    links: [{ label: "The eleven topics", href: "#challenges" }],
  },
  {
    icon: "dna",
    title: "Get the sequence",
    body: "Look the protein up in UniProt and download its amino-acid sequence in FASTA format. Read the entry's annotation — organism, isoforms and features such as a signal peptide. For a variant, change only that one residue in a copy of the sequence.",
    points: [
      "Decide whether to predict the mature protein, without the signal peptide, and make the same choice for the reference and the variant — it also affects the numbering.",
      "Save the reference and the variant as separate, clearly named FASTA files.",
      "Note the accession number of the entry for your documentation.",
    ],
    caution:
      "A residue's position in the literature can differ from its position in the UniProt sequence, because several protein families are described with their own numbering schemes. Before substituting, make sure the position you picked really holds the expected amino acid.",
    links: [
      { label: "UniProt", href: "https://www.uniprot.org/" },
      { label: "Toolbox", href: "#toolbox" },
    ],
  },
  {
    icon: "database",
    title: "Check what already exists",
    body: "Before running any prediction, see whether structures already exist. The AlphaFold Protein Structure Database holds ready-made predictions for many UniProt proteins, while RCSB PDB and PDBe hold experimentally determined structures.",
    points: [
      "An experimental structure is the best reference against which to judge a prediction.",
      "For each structure, note the method, the resolution and any bound ligands.",
      "AlphaFold DB holds predictions for UniProt sequences; a variant you made yourselves is unlikely to be there — you will predict it in step 4.",
    ],
    links: [
      { label: "AlphaFold DB", href: "https://alphafold.ebi.ac.uk/" },
      { label: "RCSB PDB", href: "https://www.rcsb.org/" },
      { label: "PDBe", href: "https://www.ebi.ac.uk/pdbe/" },
    ],
  },
  {
    icon: "sparkle",
    title: "Run the prediction",
    body: "AlphaFold Server gives free access to AlphaFold 3 for non-commercial use, with a daily job limit. You paste the sequence, or the sequences of the complex, name the job and submit it. Run the reference and the variant as two separate jobs so that they stay comparable.",
    points: [
      "Where it is relevant, add the extra chains, ions or ligands that AlphaFold Server supports.",
      "Keep a record: which sequence, which additional molecules, which date, which job name.",
      "Alternative routes: ColabFold in a notebook, or an open model such as Boltz-2 or Chai-1 if your team has a GPU.",
    ],
    caution:
      "AlphaFold Server accepts only the ligands, ions and modifications it supports — not arbitrary chemical structures. Check its FAQ before you design your workflow; a complex with a custom small molecule needs a model that takes one as input, such as Boltz-2, or a docking step.",
    links: [
      { label: "AlphaFold Server", href: "https://alphafoldserver.com/" },
      { label: "ColabFold", href: "https://github.com/sokrypton/ColabFold" },
      { label: "Boltz", href: "https://github.com/jwohlwend/boltz" },
      { label: "Toolbox", href: "#toolbox" },
    ],
  },
  {
    icon: "chart",
    title: "Read the confidence scores",
    body: "Every prediction comes with confidence scores. They are the first thing you look at: they show which parts of the model you can use and which you cannot. A structure with low confidence exactly where your region of interest lies does not support conclusions about that region.",
    points: [
      "pLDDT: per-residue confidence on a 0–100 scale — local accuracy.",
      "PAE (predicted aligned error): expected positional error in Å for pairs of residues — the relative placement of domains and chains.",
      "pTM and ipTM: overall scores — pTM for the whole structure, ipTM for the relative positions of the subunits of a complex.",
    ],
    visual: "plddt",
    links: [{ label: "AlphaFold DB FAQ", href: "https://alphafold.ebi.ac.uk/faq" }],
  },
  {
    icon: "microscope",
    title: "Visualise and compare",
    body: "Everything here runs in the notebook you already have open. py3Dmol draws the structure inline, coloured by pLDDT; Biopython or ProDy superimposes the model on a reference and gives you the RMSD; Foldseek finds structurally similar proteins even where sequence similarity is low.",
    points: [
      "Compare prediction with prediction, but also prediction with experimental structure.",
      "Zoom into the region of interest and note what changes: side chains, hydrogen bonds, salt bridges, loop conformation.",
      "Agreement with experimental structures that may have been in the model's training data is not independent validation.",
      "Save the figures you make — a notebook cell output is not a figure until you export it with `plt.savefig` or the viewer\u2019s PNG export.",
    ],
    commands: [
      {
        env: "pip",
        code: "!pip install py3Dmol biotite prody",
        note: "The three packages this step uses; all install in a Colab cell in under a minute.",
      },
      {
        env: "py3Dmol",
        code: 'v = py3Dmol.view(data=open("model.cif").read(), format="cif"); v.setStyle({"cartoon": {"colorscheme": {"prop": "b", "gradient": "roygb", "min": 50, "max": 90}}}); v.zoomTo(); v.show()',
        note: "Draw the model inline, coloured by pLDDT (AlphaFold stores it in the B-factor field).",
      },
      {
        env: "Biopython",
        code: 'sup = Superimposer(); sup.set_atoms(ref_atoms, model_atoms); sup.apply(model_atoms); print(sup.rms)',
        note: "Superimpose the model on a reference and print the RMSD in Å.",
      },
      {
        env: "matplotlib",
        code: 'plt.imshow(pae, cmap="Greens_r"); plt.colorbar(label="PAE (Å)")',
        note: "Plot the predicted aligned error matrix from the prediction's JSON output.",
      },
    ],
    links: [
      { label: "py3Dmol", href: "https://pypi.org/project/py3Dmol/" },
      { label: "Biotite", href: "https://www.biotite-python.org/" },
      { label: "Foldseek", href: "https://search.foldseek.com/search" },
    ],
  },
  {
    icon: "flask",
    title: "Interpret critically and document",
    body: "A structure predictor gives a static prediction. It was not designed to predict the effect of point mutations — a single substitution often barely changes the predicted structure — nor binding affinities. That is not a failure of your team; it is the limit of the method, and it should be stated.",
    points: [
      "Complement it with other approaches: docking, stability and variant-effect predictors, affinity models such as Boltz-2, property models such as Chemprop, and the literature. Each of those is also a prediction.",
      "Separate explicitly what the data show from what you hypothesise.",
      "Record tools, versions, inputs and parameters — you will need them for the final presentation.",
      "Ask your mentors early, not at the last minute.",
    ],
    links: [
      { label: "Final presentation", href: "#presentation" },
      { label: "Toolbox", href: "#toolbox" },
    ],
  },
];

export const plddtBands = [
  { range: "> 90", label: "Very high", note: "Side chains are usually reliable too.", tone: "p3" },
  { range: "70–90", label: "High", note: "The backbone is generally reliable.", tone: "p2" },
  { range: "50–70", label: "Low", note: "Treat with caution.", tone: "p1" },
  { range: "< 50", label: "Very low", note: "Often disordered. Do not interpret.", tone: "p0" },
];

/* ---------- Topics ----------
   One topic per team, assigned at the briefing. The questions are illustrative:
   teams formulate their own and run the seven steps themselves. */
export type Topic = { id: string; kicker: string; title: string; body: string; question: string };

export const topics: Topic[] = [
  {
    id: "01",
    kicker: "AMR",
    title: "Carbapenem resistance in hospital bacteria",
    body: "Last-line antibiotics are failing against Klebsiella and Acinetobacter in South Asian hospitals, driven by enzymes that destroy the drug before it acts.",
    question:
      "How do active-site substitutions in a carbapenemase such as NDM-1 change the way it accommodates the antibiotic?",
  },
  {
    id: "02",
    kicker: "AMR",
    title: "Tuberculosis drug targets",
    body: "Bangladesh carries one of the world's higher tuberculosis burdens, and resistance is read from a handful of well-studied proteins.",
    question:
      "What does the structure of RpoB or InhA suggest about why a specific resistance mutation weakens drug binding?",
  },
  {
    id: "03",
    kicker: "Arboviruses",
    title: "Dengue antigens and the serotype switch",
    body: "Dengue is now an annual epidemic, and a change in the dominant serotype changes which antibodies still recognise the virus.",
    question:
      "Where do the envelope proteins of two DENV serotypes differ structurally, and does that difference sit in a known antibody epitope?",
  },
  {
    id: "04",
    kicker: "Zoonoses",
    title: "Nipah and the species barrier",
    body: "Nipah spills over almost every winter through raw date-palm sap, with a case fatality rate among the highest of any human virus.",
    question:
      "How does the Nipah attachment protein engage its human receptor, and which contact residues differ in the Bangladesh lineage?",
  },
  {
    id: "05",
    kicker: "Enteric disease",
    title: "Vaccine and diagnostic antigens",
    body: "Cholera and typhoid remain endemic, and both are approached through the proteins displayed on the bacterial surface.",
    question:
      "Which exposed regions of a Vibrio cholerae or S. Typhi surface antigen look like plausible vaccine or rapid-test targets, and how confident is the model there?",
  },
  {
    id: "06",
    kicker: "Snakebite",
    title: "Venom toxins and antivenom coverage",
    body: "Snakebite kills thousands of people here every year, and the antivenom in use was often raised against venom collected in other countries.",
    question:
      "How structurally similar are the three-finger toxins of a local krait or cobra to those the available antivenom was raised against?",
  },
  {
    id: "07",
    kicker: "Human genetics",
    title: "Haemoglobin variants and thalassaemia",
    body: "Carrier rates for β-thalassaemia and HbE are high across the country, and most variants are still interpreted from sequence alone.",
    question:
      "What does the structure around a specific β-globin variant suggest about why it destabilises the tetramer, and does a variant-effect predictor agree?",
  },
  {
    id: "08",
    kicker: "Crop protection",
    title: "Pathogen effectors and host resistance",
    body: "Wheat blast arrived in 2016 and rice blast never left. Both work by injecting effector proteins into the plant cell.",
    question:
      "How does a blast fungus effector fit against its host target, and what would a resistance allele change about that interface?",
  },
  {
    id: "09",
    kicker: "Fungicide resistance",
    title: "The azole target, in field and clinic",
    body: "Azoles are used both on crops and in hospitals, so resistance that emerges in one setting can show up in the other.",
    question:
      "How do CYP51 mutations reshape the azole binding pocket, and are the same substitutions seen in agricultural and clinical isolates?",
  },
  {
    id: "10",
    kicker: "Food system",
    title: "Pathogens of aquaculture and livestock",
    body: "Shrimp and poultry are major sources of export income and of protein, and their pathogens are barely studied computationally.",
    question:
      "Which protein of a shrimp or poultry pathogen is the most tractable target, and what does its predicted structure say about that choice?",
  },
  {
    id: "11",
    kicker: "Protein engineering",
    title: "Designing and improving proteins",
    body: "Enzymes for food processing and textile effluent, or a designed binder against a pathogen target — generative models make this a one-day project.",
    question:
      "Can you propose a redesigned enzyme or a designed binder, and show from confidence scores and comparisons why it is worth testing?",
  },
];

export const topicsNote = {
  title: "The questions are illustrative",
  body: "They are not requirements, they do not restrict the scope of your work, and they do not oblige you to use a particular protein, organism, dataset or tool. Formulate your own question inside your topic, choose your own methodology, and run the seven steps yourselves — the result you defend is the one you arrived at.",
};

/* ---------- Final presentation ---------- */
export const talk = [
  { art: "team", title: "The team and the idea", time: "about 1 min", items: ["Team", "Challenge", "Proposed solution"] },
  {
    art: "problem",
    title: "The scientific problem",
    time: "about 3 min",
    items: ["Scientific background", "The problem", "Why it matters", "Hypothesis / research question", "Available data"],
  },
  {
    art: "approach",
    title: "The approach",
    time: "about 3 min",
    items: ["Methodology", "Workflow", "Input data", "Complementary tools", "Validation and limitations"],
  },
  {
    art: "results",
    title: "Tools and results",
    time: "about 3 min",
    items: [
      "How the relevant tools and databases were used (e.g. AlphaFold, UniProt)",
      "What results emerged",
      "How they were assessed",
      "What they contributed to the solution",
      "What the next steps are",
    ],
  },
] as const;

export const mustReport = [
  "the tools, databases and external sources it used",
  "its key inputs and parameters",
];

/* ---------- Evaluation ---------- */
export type Criterion = { letter: string; icon: string; name: string; detail: string; weight: number };

export const criteria: Criterion[] = [
  {
    letter: "A",
    icon: "microscope",
    name: "Relevance to the assigned topic · Scientific and technical validity · Feasibility and potential impact",
    detail:
      "The question sits inside the topic the team was assigned, the approach is scientifically and technically sound, and the work was achievable in the time available. Judges also weigh what the result would be worth if it held up.",
    weight: 35,
  },
  {
    letter: "B",
    icon: "sparkle",
    name: "Innovation and originality",
    detail:
      "The team found its own angle rather than restating the indicative question, and can say what is new about the way it approached the problem.",
    weight: 25,
  },
  {
    letter: "C",
    icon: "route",
    name: "Sound and meaningful use of AI tools · Quality and documentation of the open-source code produced",
    detail:
      "Confidence scores are read correctly and the conclusions respect them. Tools, inputs and parameters are documented, and the notebook in the team's public repository runs for someone else.",
    weight: 20,
  },
  {
    letter: "D",
    icon: "slides",
    name: "Quality of the presentation and documentation of the solution",
    detail:
      "Ten minutes that take the audience from the problem to the result, with figures that can be read without the speaker and a plain account of what was not done.",
    weight: 20,
  },
];

export const evaluationRules = [
  "Each criterion is scored from 0 to 10; the final score is the weighted sum.",
  "Where there are several judges, a team's score is the average of their weighted scores.",
  "In the event of a tie, the higher score on criterion A ranks first; if the tie remains, criterion D decides.",
  "Objections are heard on procedural error only. Decisions of scientific judgement are final.",
];

export const evaluationNote = {
  title: "A null result, argued well, scores",
  body: "If the prediction was inconclusive, the structures were too uncertain to support the claim, or the method turned out to be the wrong one, say so and show the evidence. That is a finding. Judges mark it above a confident conclusion the data do not carry — and over-claiming is the fastest way to lose points on criteria A and C.",
};

/* ---------- Toolbox ---------- */
export type Kind = "AI tool" | "Tool" | "Database";
export type Tool = { name: string; icon: string; href: string; host: string; desc: string; kind: Kind; stage: string };

export const stages = [
  { id: "sequence", icon: "dna", n: "1", name: "Sequence & annotation", blurb: "Check and align sequences, and find homologous proteins and functional regions." },
  { id: "prediction", icon: "cube", n: "2", name: "Structure prediction", blurb: "Predict the structure of proteins and complexes from sequence." },
  { id: "structures", icon: "database", n: "3", name: "Structure databases", blurb: "Look up predicted and experimentally determined structures." },
  { id: "search", icon: "route", n: "4", name: "Search & comparison", blurb: "Find proteins with a similar three-dimensional structure." },
  { id: "visualisation", icon: "atom", n: "5", name: "Visualisation & analysis", blurb: "Draw, superimpose and measure structures inside the notebook — every package here installs with pip in Colab." },
  { id: "design", icon: "sparkle", n: "6", name: "Protein design", blurb: "Generate new backbones and sequences, and redesign existing ones." },
  { id: "molecules", icon: "flask", n: "7", name: "Small molecules & docking", blurb: "Handle chemical structures, predict molecular properties and place a ligand in a binding site." },
  { id: "genomics", icon: "code", n: "8", name: "Sequence & genome models", blurb: "Models that read protein or nucleotide sequence directly." },
  { id: "resources", icon: "layers", n: "·", name: "Resources", blurb: "Documentation and reference material for the tools above." },
];

export const essentials: Tool[] = [
  { name: "AlphaFold Server", icon: "sparkle", href: "https://alphafoldserver.com/", host: "alphafoldserver.com", desc: "Official web access to AlphaFold 3 for non-commercial use.", kind: "AI tool", stage: "2 · Structure prediction" },
  { name: "UniProt", icon: "dna", href: "https://www.uniprot.org/", host: "uniprot.org", desc: "Check protein sequences, isoforms and functional annotation.", kind: "Database", stage: "1 · Sequence & annotation" },
  { name: "AlphaFold Protein Structure Database", icon: "database", href: "https://alphafold.ebi.ac.uk/", host: "alphafold.ebi.ac.uk", desc: "Search available predicted protein structures and complexes.", kind: "Database", stage: "3 · Structure databases" },
  { name: "RCSB Protein Data Bank", icon: "cube", href: "https://www.rcsb.org/", host: "rcsb.org", desc: "Experimentally determined 3D structures and structural data.", kind: "Database", stage: "3 · Structure databases" },
  { name: "py3Dmol", icon: "atom", href: "https://pypi.org/project/py3Dmol/", host: "pypi.org/project/py3Dmol", desc: "Draw and colour 3D structures inline in a Colab notebook, in one pip install.", kind: "Tool", stage: "5 · Visualisation" },
];

export const tools: Tool[] = [
  { name: "NCBI BLAST", icon: "microscope", href: "https://blast.ncbi.nlm.nih.gov/", host: "blast.ncbi.nlm.nih.gov", desc: "Homology search and local sequence similarity.", kind: "Tool", stage: "sequence" },
  { name: "InterPro", icon: "layers", href: "https://www.ebi.ac.uk/interpro/", host: "ebi.ac.uk", desc: "Protein families, domains and functional regions.", kind: "Database", stage: "sequence" },
  { name: "Clustal Omega", icon: "list", href: "https://www.ebi.ac.uk/jdispatcher/msa/clustalo", host: "ebi.ac.uk", desc: "Multiple sequence alignment.", kind: "Tool", stage: "sequence" },
  { name: "MMseqs2", icon: "route", href: "https://github.com/soedinglab/MMseqs2", host: "github.com", desc: "Fast sequence search and clustering; builds the MSAs that ColabFold uses.", kind: "Tool", stage: "sequence" },
  { name: "EMBL-EBI Job Dispatcher", icon: "grid", href: "https://www.ebi.ac.uk/jdispatcher/", host: "ebi.ac.uk", desc: "A collection of tools for sequences, alignment and analyses.", kind: "Tool", stage: "sequence" },

  { name: "AlphaFold 3 – code", icon: "code", href: "https://github.com/google-deepmind/alphafold3", host: "github.com", desc: "Official AlphaFold 3 code and documentation; the terms of use for the model parameters apply.", kind: "AI tool", stage: "prediction" },
  { name: "ColabFold", icon: "flask", href: "https://github.com/sokrypton/ColabFold", host: "github.com", desc: "An accessible notebook workflow for predictions based on AlphaFold and derived methods.", kind: "AI tool", stage: "prediction" },
  { name: "Boltz", icon: "sparkle", href: "https://github.com/jwohlwend/boltz", host: "github.com", desc: "Open biomolecular structure model; Boltz-2 also predicts binding affinity alongside the structure.", kind: "AI tool", stage: "prediction" },
  { name: "Chai-1", icon: "sparkle", href: "https://github.com/chaidiscovery/chai-lab", host: "github.com", desc: "Open model for the structure of proteins, nucleic acids and their complexes with ligands.", kind: "AI tool", stage: "prediction" },
  { name: "ESMFold", icon: "dna", href: "https://github.com/facebookresearch/esm", host: "github.com", desc: "Structure prediction from a single sequence, without an MSA.", kind: "AI tool", stage: "prediction" },
  { name: "RoseTTAFold", icon: "atom", href: "https://github.com/RosettaCommons/RoseTTAFold", host: "github.com", desc: "An alternative model for predicting protein structures and interactions.", kind: "AI tool", stage: "prediction" },
  { name: "SWISS-MODEL", icon: "cube", href: "https://swissmodel.expasy.org/", host: "swissmodel.expasy.org", desc: "Homology modelling of protein structures.", kind: "Tool", stage: "prediction" },

  { name: "PDBe", icon: "database", href: "https://www.ebi.ac.uk/pdbe/", host: "ebi.ac.uk", desc: "The European portal for Protein Data Bank data and structural biology tools.", kind: "Database", stage: "structures" },
  { name: "ModelArchive", icon: "layers", href: "https://www.modelarchive.org/", host: "modelarchive.org", desc: "Deposited theoretical models of macromolecular structures.", kind: "Database", stage: "structures" },

  { name: "Foldseek", icon: "route", href: "https://search.foldseek.com/", host: "search.foldseek.com", desc: "Fast structural similarity search.", kind: "AI tool", stage: "search" },
  { name: "DALI", icon: "grid", href: "http://ekhidna2.biocenter.helsinki.fi/dali/", host: "ekhidna2.biocenter.helsinki.fi", desc: "Structure comparison against the PDB by distance-matrix alignment.", kind: "Tool", stage: "search" },

  { name: "py3Dmol", icon: "atom", href: "https://pypi.org/project/py3Dmol/", host: "pypi.org/project/py3Dmol", desc: "3Dmol.js in a notebook cell: cartoon, surface and per-residue colouring, no install beyond pip.", kind: "Tool", stage: "visualisation" },
  { name: "nglview", icon: "cube", href: "https://github.com/nglviewer/nglview", host: "github.com", desc: "NGL viewer as a Jupyter widget; trajectories and structures in the notebook.", kind: "Tool", stage: "visualisation" },
  { name: "Biotite", icon: "code", href: "https://www.biotite-python.org/", host: "biotite-python.org", desc: "Read mmCIF and PDB, superimpose structures, compute RMSD, and plot with Matplotlib.", kind: "Tool", stage: "visualisation" },
  { name: "ProDy", icon: "route", href: "http://prody.csb.pitt.edu/", host: "prody.csb.pitt.edu", desc: "Structure analysis in Python: alignment, superposition, contacts and normal modes.", kind: "Tool", stage: "visualisation" },
  { name: "Matplotlib", icon: "chart", href: "https://matplotlib.org/stable/", host: "matplotlib.org", desc: "The pLDDT and PAE plots for your slides, produced by code.", kind: "Tool", stage: "visualisation" },
  { name: "RFdiffusion", icon: "sparkle", href: "https://github.com/RosettaCommons/RFdiffusion", host: "github.com", desc: "Generates new protein backbones, including binders to a given target.", kind: "AI tool", stage: "design" },
  { name: "ProteinMPNN", icon: "dna", href: "https://github.com/dauparas/ProteinMPNN", host: "github.com", desc: "Designs an amino-acid sequence for a given backbone.", kind: "AI tool", stage: "design" },
  { name: "ESM-2", icon: "code", href: "https://github.com/facebookresearch/esm", host: "github.com", desc: "Protein language model; embeddings and per-residue likelihoods for variant work.", kind: "AI tool", stage: "design" },

  { name: "RDKit", icon: "flask", href: "https://www.rdkit.org/", host: "rdkit.org", desc: "Cheminformatics toolkit: read SMILES, generate conformers, compute descriptors.", kind: "Tool", stage: "molecules" },
  { name: "Chemprop", icon: "sparkle", href: "https://github.com/chemprop/chemprop", host: "github.com", desc: "Message-passing neural networks that predict molecular properties from structure.", kind: "AI tool", stage: "molecules" },
  { name: "DiffDock", icon: "atom", href: "https://github.com/gcorso/DiffDock", host: "github.com", desc: "Diffusion-based prediction of how a small molecule binds to a protein.", kind: "AI tool", stage: "molecules" },
  { name: "AutoDock Vina", icon: "cube", href: "https://vina.scripps.edu/", host: "vina.scripps.edu", desc: "Widely used docking program with a scoring function.", kind: "Tool", stage: "molecules" },
  { name: "PubChem", icon: "database", href: "https://pubchem.ncbi.nlm.nih.gov/", host: "pubchem.ncbi.nlm.nih.gov", desc: "Chemical structures, identifiers and bioactivity records.", kind: "Database", stage: "molecules" },
  { name: "ChEMBL", icon: "database", href: "https://www.ebi.ac.uk/chembl/", host: "ebi.ac.uk", desc: "Curated bioactivity data for drug-like molecules and their targets.", kind: "Database", stage: "molecules" },


  { name: "AlphaMissense", icon: "sparkle", href: "https://alphamissense.hegelab.org/", host: "alphamissense.hegelab.org", desc: "Predicted pathogenicity scores for missense variants in human proteins.", kind: "AI tool", stage: "genomics" },
  { name: "Evo 2", icon: "dna", href: "https://github.com/ArcInstitute/evo2", host: "github.com", desc: "Genome-scale language model over nucleotide sequence.", kind: "AI tool", stage: "genomics" },
  { name: "Ensembl", icon: "database", href: "https://www.ensembl.org/", host: "ensembl.org", desc: "Genomes, genes and variation across species.", kind: "Database", stage: "genomics" },

  { name: "Google Colab", icon: "code", href: "https://colab.research.google.com/", host: "colab.research.google.com", desc: "Where the workflow runs: a notebook in the browser, free tier, with pip available in every cell.", kind: "Tool", stage: "resources" },
  { name: "Google DeepMind – AlphaFold", icon: "sparkle", href: "https://deepmind.google/science/alphafold/", host: "deepmind.google", desc: "Main page, documentation and access to AlphaFold resources.", kind: "AI tool", stage: "resources" },
  { name: "AlphaFold DB FAQ", icon: "help", href: "https://alphafold.ebi.ac.uk/faq", host: "alphafold.ebi.ac.uk", desc: "How to read pLDDT and PAE, and what the database does and does not contain.", kind: "Database", stage: "resources" },
];

export const licences = [
  "AlphaFold Server is available for non-commercial use.",
  "The AlphaFold 3 model parameters are subject to Google DeepMind's terms of use.",
  "Open models and tools carry their own licences — check each repository before you use a model in your work, and record which version you ran.",
  "Before using any tool, check its terms: some are free only for academic or non-commercial work.",
];

/* ---------- FAQ ---------- */
export type Faq = { id: string; cat: string; icon: string; q: string; a: string };

export const faqCategories = [
  { id: "taking-part", name: "Taking part", icon: "help" },
  { id: "tools", name: "Tools & science", icon: "flask" },
  { id: "reporting", name: "Reporting", icon: "list" },
];

export const faqSuggestions = ["pLDDT", "mentor", "GPU", "ligand", "AI tools"];

export const faqs: Faq[] = [
  { id: "experience", cat: "taking-part", icon: "help", q: "How much computational biology do we need to know?", a: "Enough to follow the seven steps on this page. Each team is paired with mentors, and the workflow — look the protein up, check for existing structures, predict, read the confidence scores, compare — needs no prior structural biology. Ask your mentors early rather than at the last minute." },
  { id: "which-mentor", cat: "taking-part", icon: "microscope", q: "Scientific or technical mentor — which do we ask?", a: "Ask a scientific mentor about the biological question, the hypothesis and how to interpret a result. Ask a technical mentor about running the predictions, the tools and reading the confidence scores. When in doubt, ask either; they will point you to the other." },
  { id: "gpu", cat: "taking-part", icon: "cube", q: "Do we need a GPU, or anything installed?", a: "No. AlphaFold Server runs in the browser with a daily job limit, the databases are web pages, and every package in the toolbox installs into a Colab notebook with pip — py3Dmol draws the structures inline, so there is no desktop viewer to install. A GPU only matters if you choose to run an open model such as ColabFold, Boltz or Chai-1 yourselves; Colab\u2019s free tier can do that for small jobs." },
  { id: "ligand", cat: "tools", icon: "flask", q: "Our target binds a small molecule that AlphaFold Server does not support. What now?", a: "AlphaFold Server accepts only the ligands, ions and modifications on its list. For anything else, use a model that takes an arbitrary ligand as input, such as Boltz or Chai-1, or predict the protein and dock the molecule separately with DiffDock or AutoDock Vina. Say in your presentation which route you took." },
  { id: "mutation", cat: "tools", icon: "dna", q: "We predicted a variant and the structure barely changed. Did we do something wrong?", a: "Probably not. Structure predictors were not designed to show the effect of a point mutation, and a single substitution often leaves the predicted fold almost unchanged. That is a result worth reporting — and a reason to bring in another method, such as a variant-effect predictor, a stability predictor or the literature." },
  { id: "confidence", cat: "tools", icon: "chart", q: "How low is too low for pLDDT?", a: "Below 50 a region is often disordered and should not be interpreted structurally; between 50 and 70 treat it with caution; above 70 the backbone is generally reliable, and above 90 so are the side chains. What matters most is the confidence in your region of interest, not the average over the whole model." },
  { id: "validation", cat: "tools", icon: "sparkle", q: "Our model matches an experimental structure. Is that validation?", a: "Not on its own. That structure may have been in the model's training data, so agreement is expected and does not independently confirm anything. Treat it as a sanity check, and be explicit about what would count as real validation — usually an experiment." },
  { id: "ai-tools", cat: "reporting", icon: "list", q: "Can we use AI tools, and do we have to say so?", a: "Yes, and yes. Every team must report the tools, databases and external sources it used, along with its key inputs and parameters. Using AI and computational biology tools does not replace scientific validation." },
  { id: "record", cat: "reporting", icon: "slides", q: "What should we be writing down as we go?", a: "For each job: the exact input sequence, any extra chains, ions or ligands, the tool and its version, the date, the job name and the parameters you changed. Keep captioned images of what you looked at. You need all of it for the final presentation, and you will not reconstruct it afterwards." },
];
