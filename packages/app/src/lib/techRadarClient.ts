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

// Techniques
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
  key: "TDD",
  id: "tdd",
  title: "Test-Driven Development",
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
  key: "api-spec-as-code",
  id: "api-spec-as-code",
  title: "API Specification as Code",
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
