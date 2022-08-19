let numbers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,
9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];

function generate() {
    if($('.input-name').val() == '') {
        Swal.fire({
            title: 'Atenção',
            icon: 'warning',
            text: 'Esqueceu de preencher o nome Prof. Albert',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Ok, vou colocar!',
            denyButtonText: `Vai te fuder Braian`,
        }).then((result) => {
            if (result.isDenied) {
              Swal.fire('Vai tu Albert KKK', '', 'success')
            }
        })
    } else {
        let numbersPrinted = [];

        $.LoadingOverlay("show");
        let shuffled = shuffle(numbers);
    
        for(let i = 0; i < shuffled.length; i++) {
            if(i % 2 !== 0) {
                let next = shuffled[i];
                let current = shuffled[i-1];
                let two = '' + current + ' x ' + next;
    
                if(numbersPrinted.includes(two)) {
                    shuffled = shuffle(shuffled);
                    i = i-1;
                } else {
                    numbersPrinted.push(two);
                }
                console.log(two);
            }
    
            $('.name-row').html($('.input-name').val());
            $('.num-'+(i+1)).html(shuffled[i]);
        }
    
        $.LoadingOverlay("hide");
    }
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}