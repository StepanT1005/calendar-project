const createCalculator = () => {
    let memo = 0;
    const add = (num) => memo +=num;
    const decrease = (num) => memo -=num;
    const reset = () => memo = 0;
    const getMemo = () => memo;

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
  };

  let calculator1 = createCalculator();
  let calculator2 = createCalculator();

  calculator1.add(5);
  calculator1.add(5);
  calculator1.decrease(51);
  calculator1.add(5);
  calculator1.reset(5);
  console.log(calculator1.getMemo());
  console.log(calculator2.getMemo())
