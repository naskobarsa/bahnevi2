function galacticElections(arrOfObj) {
    let systemMap = new Map();

    for (const systemObj of arrOfObj) {
        let system = systemObj['system'];
        let candidates = systemObj['candidate'];
        let votes= systemObj['votes'];
        
        if (!systemMap.has(system)) {
            systemMap.set(system, new Map())
        }
        if (!systemMap.get(system).has(candidates)) {
            systemMap.get(system).set(candidates, votes)
        }else{
            systemMap.get(system).set(candidates, systemMap.get(system).get(candidates) + votes)
        }

        let systemWinners = [];

    }
    for (const systemInput of systemMap) {
        let systemName = systemInput[0];
        let systemCandidates = systemInput[1];
        let sortedCandidates = new Map([Array.from(systemCandidates)]
            .sort((a,b)=>{
                return b[1] - a[1]
            }))

        console.log(sortedCandidates)
    }

}


   galacticElections([
        { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
        { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
        { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
        { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
        { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
        { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 }
        ]);