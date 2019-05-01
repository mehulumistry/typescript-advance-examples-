
const testFun = (fn: Function) => {

  // fn() output is breaking and you are getting any in result, so goal is to fix that
  const result = fn(123);
  return result
}

const testInnerFn = (item:string) => item.toString();

const out = testFun(testInnerFn)

type FunctionReturnType<T> = T extends (...args: any[]) => infer ReturnType ? ReturnType : never 


/************ Solution  *************/

type Lambda = (...args: any[]) => any

// get return type of function

type returnTypeFunction<T extends Function> = T extends (...args: any[]) => infer returnType ? returnType : never


const someRandomStuff = <fn extends Function>(originalFn: fn) => {

  const result: returnTypeFunction<fn> = originalFn(12344);
  return result;
}

const innerFn = (item: number) => item.toString();

const output = someRandomStuff(innerFn)


//

interface Item{
  item: string
  id: number
}

class ShoppingCart{

  public cartItems:Item[] = [];

  public addItem(item: Item){
    this.cartItems.push()
  }
  public removeItem(id: number){

  }
  public log(){
    console.log(this.cartItems, " logged");
  }
}

function purchase(cartItems: Item[]){
  //looping over the shopping cart and add price and give final amount

  cartItems.forEach(item =>{
    console.log(item.id, " ", item.item, "price") 
  })
  console.log("purchased");

}

let cart = new ShoppingCart();
cart.addItem({item: "milk",id: 4});

let cart4: any = "sdfa";
















