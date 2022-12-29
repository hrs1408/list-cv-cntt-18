    var listCv = [{
            "position": "Front-end Developer",
            "link": "http://huyhieu.online",
            "name": "Nguyễn Phan Huy Hiếu"
        },
        {
            "position": "Full-stack Developer",
            "link": "https://nguyentruonganhkiet.work",
            "name": "Nguyễn Trương Anh Kiệt"
        }
    ]

    function render() {
        for (let i = 0; i < listCv.length; i++) {
            $('#renderCv').append(
                `
                 <div class = "col-lg-4" >
                     <div class = "properties properties2 mb-30" >
                     <div class = "properties__card" >
                     <div class = "properties__img overlay1" >
                     <a href = "${listCv[i].link}" > <img src ="https://static.vecteezy.com/system/resources/thumbnails/004/702/853/small/line-letter-cv-logo-isolated-on-white-background-vector.jpg"
                 alt = ""> </a> 
                 </div> 
                 <div class = "properties__caption" >
                     <p> ${listCv[i].position} </p>
                    <h3> <a href = "${listCv[i].link}" target = "_blank" > ${listCv[i].name} </a></h3>
                     <a href = "${listCv[i].link}" target = "_blank" class = "border-btn border-btn2 mt-10" > View </a> 
                </div>
                </div> 
                </div> 
                </div>
            `
            )
        }
    }
    render();