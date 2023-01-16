let array = [];
let jobs = document.querySelectorAll('.job-card-container');
let jobLength = jobs.length;
for( let i = 0; i<jobLength;i++){
    jobs[i].click();
    setTimeout(myFunOne, 4000);
    function myFunOne (){
        document.getElementsByClassName('jobs-unified-top-card__job-insight-text-button')[0].click();
        setTimeout(myFunTwo, 4000);
        function myFunTwo(){
            skillList = document.querySelectorAll('.job-details-skill-match-status-list')[0];
            for(let j = 0; j< jobLength; j++){
                array.push(skillList.children[j].children[0].children[1].innerText);
                console.log(array);
                console.save(array)
                
                
            }
            
        }
    }
    
}

(function(console) {
    console.save = function(data, filename) {

        if (!data) {
            console.error('Console.save: No data');
            return;
        }

        if (!filename) {
            filename = 'console.json';
        }

        if (typeof data === 'object') {
            data = JSON.stringify(data, undefined, 4);
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }
})(console);
