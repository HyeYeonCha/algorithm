function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
    if(n === 0){
      return 0;
    }if(n === 1 || n === 2){
      return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  }
  