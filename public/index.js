function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
// this will print the fetch response as a JSON 
    const fetchCount = async () =>{
        const response =await fetch "then url that needs to be fetched."
        let result= await response.json(); 
        console.log(response);
    }
    fetchCount();

    let countValue = 0;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}

// Page will load first and then function will run
main()