let arr = 
[           
    "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg",
    "https://media.istockphoto.com/id/523740497/photo/beautiful-autumn-landscape-in-the-mountains-sunrise-shot.jpg?s=2048x2048&w=is&k=20&c=c2JJK0py9s3KAjMhARhD6zenZIRGxN-8x4PyvKaEQ2k="
]

let index = 0;

document.getElementById("image").src = arr[index];

function validate()
{
    if (index > arr.length - 1) {
        index = 0;
    }
    else if (index < 0) {
        index = arr.length - 1;
    }
}


function pick_prev()
{
    --index;
    validate();
    document.getElementById("image").src = arr[index];
}

function pick_next()
{
    ++index;
    validate();
    document.getElementById("image").src = arr[index];
}