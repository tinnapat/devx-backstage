import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';

import readXlsxFile from 'read-excel-file'
  
  const rings = new Array();
  rings.push({ id: "adopt", name: "ADOPT", color: "#93c47d" });
  rings.push({ id: "trial", name: "TRIAL", color: "#93d2c2" });
  rings.push({ id: "assess", name: "ASSESS", color: "#fbdb84" });
  rings.push({ id: "hold", name: "HOLD", color: "#efafa9" });
  
  const quadrants = new Array();
  quadrants.push({ id: "platforms", name: "Platforms" });
  quadrants.push({ id: "tools", name: "Tools" });
  quadrants.push({ id: "languages & frameworks", name: "Languages & Frameworks" });
  quadrants.push({ id: "techniques", name: "Techniques" });
  
  const entries = new Array();
  const radar = {
    entries,
    quadrants,
    rings
  };
  
  export class TechRadarClient implements TechRadarApi {
    async load(): Promise<TechRadarLoaderResponse> {
        // clear existing array of items
        entries.length = 0
        await fetch('/techradar/data.xlsx')
            .then(response => response.blob())
            .then(blob => readXlsxFile(blob, {}))
            .then((rows) => {
                rows.forEach( (row, i) => {
                    if (i === 0) return // Skip 1st row
                    var name = row[0]
                    var ring = row[1]
                    var quardrant = row[2]
                    var moved = row[3]
                    var url = row[4]
                    var description = row[5]

                    entries.push({
                        timeline: [
                          {
                            moved: moved,
                            ringId: ring,
                            date: new Date(),
                            description: ""
                          }
                        ],
                        url: url,
                        key: name,
                        id: name,
                        title: name,
                        quadrant: quardrant,
                        description: description
                    });
                })
        });
        console.debug(radar)
        return radar
    }
  }
  