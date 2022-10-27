let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
let urlobject = []

function apiCall(url){

    // try{

        fetch(url)
        .then(function(response){
            return resp = response.json();
        })
        
        .then(function(resp){
            // console.log(resp);
            // console.log(resp.objectIDs);
            // console.log(resp.objectIDs[10]);
            // console.log(resp.objectIDs[1000]);
            // let urlobject = []
            for (let i = 0; i < 100; i++) {
            urlobject[i] = `'https://collectionapi.metmuseum.org/public/collection/v1/objects/${resp.objectIDs[i]}'`
            // console.log(urlobject)
            // console.log(urlobject[i]);
            }
        })
    }
    function cadaobjeto(urlobject) {
        for(let i=0; i<100; i++) {
                 fetch(urlobject[i])
                     .then(function(response){
                        return resp = response.json();
                    })
                       .then(function(resp){
                        console.log(resp);
                                        // document.querySelector("body").innerHTML += `<p>${resp.title}</p>`
                        })
                    }
                }
    apiCall(url);
    cadaobjeto(urlobject);
        

          
            // //  resp.results.forEach(function(objectsID){
            //     let urlobjetct = `'https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs}'`
            //     fetch(urlobjetct)
            //     .then(function(response){
            //         return response.json();
            //     })
            //         .then(function(resp){
            //             document.querySelector("body").innerHTML += `<p>${title}</p>`


            //     document.querySelector("body").innerHTML += `
            //     <div>
            //     <p>${character.name}</p>
            //     <img src="${character.image}">
            //     </div>
            //     `
    
            // let numid = parseInt(objectIDs)
            // if(numid > 100) {
            //     break}
            //     apiCall(resp.info.next)
            // }
        // })
        // .catch(function(err){
        //     console.log(err);
        //  })
    // }catch(err){
    //     throw
    // }finally{

    //  })
        

