import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage/plugin-tech-radar';

const rings = new Array();
rings.push({ id: "adopt", name: "ADOPT", color: "#93c47d" });
rings.push({ id: "trial", name: "TRIAL", color: "#93d2c2" });
rings.push({ id: "assess", name: "ASSESS", color: "#fbdb84" });
rings.push({ id: "hold", name: "HOLD", color: "#efafa9" });

const quadrants = new Array();
quadrants.push({ id: "platforms", name: "Platforms" });
quadrants.push({ id: "tools", name: "Tools" });
quadrants.push({ id: "languages", name: "Languages & Frameworks" });
quadrants.push({ id: "techniques", name: "Techniques" });

const entries = new Array();

// Languages
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "Java",
  id: "java",
  title: "Java",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "Go",
  id: "go",
  title: "Go",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "https://spring.io/projects/spring-framework",
  key: "Spring Framework",
  id: "spring-framework",
  title: "Spring Framework",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "c#",
  id: "c#",
  title: "C#",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "python",
  id: "python",
  title: "Python",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "react",
  id: "react",
  title: "ReactJS",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "junit",
  id: "junit",
  title: "JUnit",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "javascript",
  id: "javascript",
  title: "JavaScript",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "typescript",
  id: "typescrit",
  title: "TypeScript",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "kotlin",
  id: "kotlin",
  title: "Kotlin",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "angular",
  id: "angular",
  title: "Angular",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "react-native",
  id: "react-native",
  title: "React Native",
  quadrant: "languages",
  description: ""
});

// Language - TRIAL
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "flutter",
  id: "flutter",
  title: "Flutter",
  quadrant: "languages",
  description: ""
});

// Language - ASSESS
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "Spring Native",
  id: "spring-native",
  title: "Spring Native",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "spring-cloud-gateway",
  id: "spring-cloud-gateway",
  title: "Spring Cloud Gateway",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "rust",
  id: "rust",
  title: "Rust",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "quarkus",
  id: "quarkus",
  title: "Quarkus",
  quadrant: "languages",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dbml",
  id: "dbml",
  title: "DBML",
  quadrant: "languages",
  description: ""
});

// Language - HOLD
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "jee",
  id: "jee",
  title: "Java EE",
  quadrant: "languages",
  description: ""
});


// Techniques - ADOPT
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "devsecops",
  id: "devsecops",
  title: "DevSecOps",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "agile",
  id: "agile",
  title: "Agile",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "cab",
  id: "cab",
  title: "Change Advisary Board",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "openAPI",
  id: "openAPI",
  title: "Open API",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "blue-green-deployment",
  id: "blue-green-deployment",
  title: "Blue-green Deployment",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "ab-testing",
  id: "ab-testing",
  title: "A/B Testing",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "security-review",
  id: "security-review",
  title: "Security Review",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "soac",
  id: "soac",
  title: "Solution Advisary Council",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "code-review",
  id: "code-review",
  title: "Code Review",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "trunk-based-development",
  id: "trunk-based-development",
  title: "Trunk-based Development",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "tdd",
  id: "tdd",
  title: "TDD",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "bdd",
  id: "bdd",
  title: "BDD",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "glt",
  id: "glt",
  title: "GLT",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "microservice",
  id: "microservice",
  title: "Microservice",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "scrum",
  id: "scrum",
  title: "Scrum",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "kanban",
  id: "kanban",
  title: "Kanban",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "test-automation",
  id: "test-automation",
  title: "Test Automation",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "grpc",
  id: "grpc",
  title: "gPRC",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "gtm",
  id: "gtm",
  title: "GTM",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "event-driven-architecture",
  id: "event-driven-architecture",
  title: "Event-driven Architecture",
  quadrant: "techniques",
  description: ""
});

entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "soac",
  id: "soac",
  title: "Solution Advisary Council",
  quadrant: "techniques",
  description: ""
});

entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "api-spec-as-code",
  id: "api-spec-as-code",
  title: "API Spec as Code",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "tech-radar",
  id: "tech-radar",
  title: "Technology Radar",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "business-review",
  id: "business-review",
  title: "Quarterly Business Review",
  quadrant: "techniques",
  description: ""
});

entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dora",
  id: "dora",
  title: "DORA",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dbops",
  id: "dbops",
  title: "DbOps",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "aaas",
  id: "aaas",
  title: "Architecture as a code",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "canary-deployment",
  id: "canary-deployment",
  title: "Canary Deployment",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "mbt",
  id: "mbt",
  title: "Model-based Testing",
  quadrant: "techniques",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "team-topology",
  id: "team-topology",
  title: "Team Topology",
  quadrant: "techniques",
  description: ""
});

entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "waterfall",
  id: "waterfall",
  title: "Waterfall",
  quadrant: "techniques",
  description: ""
});

// Tools

entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "confluence",
  id: "confluence",
  title: "Confluence",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "elk",
  id: "elk",
  title: "ELK Stack",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "grafana",
  id: "grafana",
  title: "Grafana",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "hpqc",
  id: "hpqc",
  title: "HP Quality Center",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "uft",
  id: "uft",
  title: "Micro Focus Unified Functional Testing",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "tufin",
  id: "tufin",
  title: "Tufin",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "apigee",
  id: "apigee",
  title: "Apigee",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "msteam",
  id: "msteam",
  title: "Microsoft Team",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "o365",
  id: "o365",
  title: "Office 365",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dlp",
  id: "dlp",
  title: "ForcePoint DLP",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "burp",
  id: "burp",
  title: "Burp Suite",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "jenkins",
  id: "jenkins",
  title: "Jenkins",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "aad",
  id: "aad",
  title: "Azure AD",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "robot",
  id: "robot",
  title: "Robot Framework",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "prometheus",
  id: "prometheus",
  title: "Prometheus",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dynatrace",
  id: "dynatrace",
  title: "Dynatrace",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "sv",
  id: "sv",
  title: "Micro Focus Service Virtulization",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "gitlab",
  id: "gitlab",
  title: "GitLab",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "sourcegraph",
  id: "sourcegraph",
  title: "SourceGraph",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "powerbi",
  id: "powerbi",
  title: "Power BI",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "datastage",
  id: "datastage",
  title: "DataStage",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "controlm",
  id: "controlm",
  title: "Control-M",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "webex",
  id: "webex",
  title: "WebEx",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "zabbix",
  id: "zabbix",
  title: "Zabbix",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "kafka",
  id: "kafka",
  title: "Kafka",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "mf-code-analyzer",
  id: "mf-code-analyzer",
  title: "Code Analyzer 4 MF",
  quadrant: "tools",
  description: ""
});

// Tools - TRIAL
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "postman",
  id: "postman",
  title: "Postman",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "anthos",
  id: "anthos",
  title: "Anthos",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "zoom",
  id: "zoom",
  title: "Zoom",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "jira",
  id: "jira",
  title: "JIRA",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "ansible",
  id: "ansible",
  title: "Ansible",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "postgres",
  id: "postgres",
  title: "PostgreSQL",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "trial",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "miro",
  id: "miro",
  title: "Miro",
  quadrant: "tools",
  description: ""
});

// Tools - ASSESS
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "loadrunner",
  id: "loadrunner",
  title: "LoadRunner",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "https://testmodeller.io/",
  key: "testmodeller",
  id: "testmodeller",
  title: "TestModeller",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "dephix",
  id: "delphix",
  title: "DelphiX",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "figma",
  id: "figma",
  title: "Figma",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "line-work",
  id: "line-work",
  title: "LINE for Work",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "edr",
  id: "edr",
  title: "EDR",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "slack",
  id: "slack",
  title: "Slack",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "c4",
  id: "c4",
  title: "C4 Diagrams",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "android-studio",
  id: "android-studio",
  title: "Android Studio",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "drawio",
  id: "drawio",
  title: "draw.io",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "servicenow",
  id: "servicenow",
  title: "ServiceNOW",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "elasticml",
  id: "elasticml",
  title: "Elastic ML",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "gitlab-enterprise",
  id: "gitlab-enterprise",
  title: "Gitlab Enterprise",
  quadrant: "tools",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "sonarqube",
  id: "sonarqube",
  title: "SonarQube Community",
  quadrant: "tools",
  description: ""
});

// Tools - HOLD
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "vkey",
  id: "vkey",
  title: "VKey",
  quadrant: "tools",
  description: ""
});

// Platforms
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "adopt",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "ocp",
  id: "ocp",
  title: "OpenShift Container Platform",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "https://backstage.io/",
  key: "backstage",
  id: "backstage",
  title: "Backstage",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "grails",
  id: "grails",
  title: "Grails AIOps",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "vault",
  id: "vault",
  title: "HashiCorp Vault",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "assess",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "jfrog",
  id: "jfrog",
  title: "JFrog",
  quadrant: "platforms",
  description: ""
});

// Platforms - HOLD
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "remedy",
  id: "remedy",
  title: "ITSM Remedy",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "mainframe",
  id: "mainframe",
  title: "Mainframe",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "hadoop",
  id: "hadoop",
  title: "Hadoop",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "ibm-cloud",
  id: "ibm-cloud",
  title: "IBM Cloud",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "yottadb",
  id: "yottadb",
  title: "YottaDB",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "as400",
  id: "as400",
  title: "AS/400",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "db2",
  id: "db2",
  title: "DB2",
  quadrant: "platforms",
  description: ""
});
entries.push({
  timeline: [
    {
      moved: 0,
      ringId: "hold",
      date: new Date("2022-12-06"),
      description: ""
    }
  ],
  url: "#",
  key: "was",
  id: "was",
  title: "WebSphere Application Server",
  quadrant: "platforms",
  description: ""
});
const radar = {
  entries,
  quadrants,
  rings
};

export class TechRadarClient implements TechRadarApi {
  async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
    return radar
  }
}
