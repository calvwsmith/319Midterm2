var json;

fetch('./data.json')
    .then(response => response.json())
    .then(data => loadElements(data));

function loadElements(data){
    data.videos.forEach(ele => {
        var main = document.getElementById("vid");
        if (main != null){
            var gal = document.createElement("div");
            gal.classList.add('gal');
            main.append(gal);
            var img = new Image();
            img.src = ele.vid.location;
            gal.append(img);
            var title = document.createElement("h3");
            var desc = document.createElement("p");
            var link = document.createElement("a");
            title.classList.add("title");
            link.classList.add("link");
            desc.classList.add("desc");
            title.textContent = ele.vid.title;
            desc.textContent = ele.vid.desc;
            link.textContent = ele.vid.link;
            gal.append(title);
            gal.append(desc);
            gal.append(link);
        }
        

    });

    data.images.forEach(ele => {
        var main = document.getElementById("img");
        if (main != null){
            var gal = document.createElement("div");
            gal.classList.add('gal');
            main.append(gal);
            var img = new Image();
            img.src = ele.img.location;
            gal.append(img);
            var title = document.createElement("h3");
            var desc = document.createElement("p");
            var link = document.createElement("a");
            title.classList.add("title");
            link.classList.add("link");
            desc.classList.add("desc");
            title.textContent = ele.img.title;
            desc.textContent = ele.img.desc;
            link.textContent = ele.img.link;
            gal.append(title);
            gal.append(desc);
            gal.append(link);
        }
        

    });

}
