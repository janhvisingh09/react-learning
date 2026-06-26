function Fruits(){
    const fruits = [{  id : 1 , name : 'Apple', calories : 23},
        {  id : 2 , name : 'litchi', calories : 25},
        {  id : 3 , name : 'sugarcane', calories : 567},
        {  id : 4 , name : 'banana', calories : 180},
        {  id : 5 , name : 'pineapple', calories : 76}];

        fruits.sort((a,b)=> a.name.localeCompare(b.name));
        fruits.sort((a,b)=> a.calories - b.calories);

    const list = fruits.map((fruit) => <li key = {fruit.id}>{fruit.name}&nbsp; <b>{fruit.calories}</b></li>);
    return <ol>{list}</ol>;
}
export default Fruits;