import {AggregatedBuild} from "../models/aggregatedBuild";

export class BackendParser {
  buildAggregatedObj(res:string): AggregatedBuild {
    let aggregatedBuild:AggregatedBuild = new AggregatedBuild();
    res = JSON.parse(res);
    let keys = Object.keys(res);
    for (var k in keys) {
       if ( res.hasOwnProperty(k) ) {
         //result += p + " , " + body[p] + "\n";
         console.log("Key: " + k + " val: " + res[k]);
      }
    }
      return aggregatedBuild;
  }
}
