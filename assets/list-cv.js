    var listCv = [{
            "position": "Front-end Developer",
            "link": "http://huyhieu.online",
            "name": "Nguyễn Phan Huy Hiếu"
        },
        {
            "position": "Full-stack Developer",
            "link": "https://nguyentruonganhkiet.work",
            "name": "Nguyễn Trương Anh Kiệt"
        },
        {
            "position": "Front-end Developer",
            "link": "https://nguyenvanhoang46.github.io/cv/",
            "name": "Nguyễn Văn Hoàng"
        },
        {
            "position": "Web Developer",
            "link": "https://zeroszopel.github.io/",
            "name": "Trần Như Hoàng"
        },
        {
            "position": "Front-end Developer",
            "link": "https://phamphuocvinh.github.io/vinh/html/bai1.html",
            "name": "Phạm Phước Vĩnh"
        },
        {
            "position": "Developer",
            "link": "https://buigiahan.github.io/CVInfo/",
            "name": "Bùi Gia Hân"
        },
        {
            "position": "Developer",
            "link": "https://chanhphuong.github.io/ChanhPhuong",
            "name": "Nguyễn Chánh Phương"
        },
        {
            "position": "Front-end Developer",
            "link": "https://quocduy-mycv.surge.sh/",
            "name": "Lê Công Quốc Duy"
        },
        {
            "position": "Web Developer",
            "link": "https://profileoftan.000webhostapp.com/?fbclid=IwAR00QC1whrqfuAKVtIiTs2mByarCYynw5O9AiydksPVDKYmaIbSYcRiQzNc",
            "name": "Nguyễn Nhật Tân"
        },
        {
            "position": "Developer",
            "link": "https://namphancv.000webhostapp.com/?fbclid=IwAR2xDBynO88EcKUOHCi6eW-K7-fJtU5eRqEVSDCz70ycruhhzotbfoUhWBY",
            "name": "Phan Phước Phương Nam"
        },
        {
            "position": "Developer",
            "link": "https://dat1003002.github.io/MyCv/Cv.html",
            "name": "Phan Văn Đạt"
        },
        {
            "position": "Web Developer, Graphic Design",
            "link": "https://zetstr.github.io/quoc/",
            "name": "Trương Hữu Quốc"
        },
        {
            "position": "Web Developer",
            "link": "https://phamvanlinh1207.github.io/",
            "name": "Phạm Văn Lĩnh"
        },
         {
            "position": "Developer",
            "link": "https://phanvietbao.github.io/CV/",
            "name": "Phan Viết Bảo"
        },
         {
            "position": "Developer",
            "link": "https://nguyenhoangthanhphuong236.github.io/Nii/",
            "name": "Nguyễn Hoàng Thanh Phương"
        },
         {
            "position": "Developer",
            "link": "https://hoangkimquyphi.github.io/CDFrofile/",
            "name": "Hoàng Quý Phi"
        },
         {
            "position": "PHP Developer",
            "link": "https://kieutrinh25.github.io/kieutrinh.github.io",
            "name": "Trần Thị Kiều Trinh"
        },
         {
            "position": "Web Developer",
            "link": "https://viethoangvippro.github.io/CVVH/",
            "name": "Trương Việt Hoàng"
        },
         {
            "position": "Full-stack Developer",
            "link": "https://dtp000.tk/CV/",
            "name": "Phan Đình Trung"
        },
         {
            "position": "Front-end Developer, Graphic Designer",
            "link": "https://teddy2912.github.io/trantuanphong-cv",
            "name": "Trần Tuấn Phong"
        },
         {
            "position": "Front-end Developer",
            "link": "https://quoctoan2103.github.io/nqt/",
            "name": "Nguyễn Quốc Toản"
        },
         {
            "position": "Developer",
            "link": "https://tranconghung.github.io/profile-TCH/",
            "name": "Trần Công Hưng"
        },
         {
            "position": "Java Developer",
            "link": "https://orange-programmer-2002.github.io/CV/",
            "name": "Lương Thành Đạt"
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