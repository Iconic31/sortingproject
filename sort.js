const secContainer = document.querySelector(".secContainers");
const sortTag = document.querySelectorAll(".dropdown-item"); // return node list array That's why we can looping


const videos = [
    {
        title: "Episode - 5",
        subTitle : "Why third party libraries are important?",
        img : "./img/img5.png",
        date : new Date(2022,5,24),
        view : 204
    },
    {
        title: "Episode - 2",
        subTitle: "About HTML, CSS and Javascript",
        img:"./img/img1.png",
        date: new Date(2022,5,21),
        view : 148
    },
    {
        title: "Episode - 6",
        subTitle: "React for frontend",
        img:"./img/img6.jpg",
        date: new Date(2022,5,25),
        view : 225
    },
    {
        title: "Episode - 4",
        subTitle: "Why we need to learn jQuery?",
        img:"./img/img4.png",
        date: new Date(2022,5,23),
        view : 98
    },
    {
        title: "Episode - 1",
        subTitle: "Introduction of web development",
        img:"./img/image2.png",
        date: new Date(2022,5,20),
        view : 112
    },
    {
        title: "Episode - 3",
        subTitle: "Bootstrap",
        img:"./img/img3.jpg",
        date: new Date(2022,5,22),
        view : 321
    }
];

sortTag.forEach((element) => {

    element.addEventListener("click", (e) => {
        
        const sortTagId = e.target.id;

        if(sortTagId === "ascending"){
            //sort by ascending

            const videoTagSortByAscending = videos.sort((a,b) => {
                return a.date.getTime() - b.date.getTime();        // we need to return to sort by ascending
            });

            updateSortUI(videoTagSortByAscending)

        }else if(sortTagId === "maxView"){
            //sort by most views
            
            const videoTagSortByMostView = videos.sort((a,b) => b.view - a.view)
            updateSortUI(videoTagSortByMostView);

        }else if(sortTagId === "minView"){
             //sort by less views
            
             const videoTagSortByLessView = videos.sort((a,b) => a.view - b.view)
             updateSortUI(videoTagSortByLessView);

        }else{
            //sort by descending
            
            const videoTagSortByDescending = videos.sort((a,b) => b.date.getTime() - a.date.getTime()); // if our callback is in only one statement, we don't need to use '{}' and return.
            updateSortUI(videoTagSortByDescending);
        }


    });

});


// I make a function for card box looping cuz we need to listen DRY principle
const updateSortUI = (videos) => {

    secContainer.innerHTML = "";   //to delete old card boxs

    // making card box by looping videos array
    videos.forEach((video) => {
        const videoTag = `
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
                <div class="card cardBoxs my-3">
                    <div class="card-body"> 
                        <img src="${video.img}" class="img-thumbnail" />
                    </div>
                    <div class="card-footer">
                        <h4>${video.title}</h4>
                        <span>${video.subTitle}</span>
                        <div class="my-3 dividers"></div>
                        <span>Views : <span class="fw-bold" style="color:var(--primary-color);"> ${video.view}</span> </span>
                        <b class="mt-2" style="display:block;">${video.date.toLocaleDateString()}</b>
                    </div>
                </div>
            </div>
        `; 

        secContainer.innerHTML += videoTag; // += is the most important ..cuz we made cards by using ``.
                                            // if we just use '=' without  '+' that will make only one card box(last obj of array) 
    });

};

updateSortUI(videos)

