//function didalam function (iner function)

function outer(name){

    function iner (){
        console.info("iner");
    }

    iner()
    iner()
}

outer();