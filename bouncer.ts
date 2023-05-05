function bouncer(arr: any[]) {
    // se n usar o slice, a atribuição estará apontando para a ref do arr recebido, logo alterará o original.
    const newArr = arr.filter(v => !!v === true)

    return newArr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]))
