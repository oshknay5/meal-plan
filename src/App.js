
import { useState } from 'react';
import './App.css';
import { MyList } from './MyList';
import { MyMealsAndIngredients } from './MyMealsAndIngredients';
import uuid from 'react-uuid';
import { useEffect } from 'react';




function App() {
const [mealPlans, setMealPlans]=useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans): [])
const [selectedDay, setSelectedDay] = useState(false)

useEffect(()=>{
  localStorage.setItem('mealPlans', JSON.stringify(mealPlans))
}, [mealPlans])



  
const addMeal = () =>{
    const newMeal={
    title:'Today is...',
    id: uuid(),
    mealForADay:'',
    ingredients: ''
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)
  }

const deleteDay = (mealId) => {
      setMealPlans (mealPlans.filter(({id}) =>id!==mealId))
  }

const updateDay=(myUpdatedMeal) => {
  const updatedMeals = mealPlans.map((mealPlan)=>{
    if (mealPlan.id===myUpdatedMeal.id ){
      return myUpdatedMeal;
    }
    return mealPlan;
  })
    setMealPlans(updatedMeals)
}

 const getActiveMeal = () => {
  return mealPlans.find(({id}) => id === selectedDay)
 }
 
  return (
    <div className="App">
      <MyList 
       addMeal={addMeal} 
       mealPlans={mealPlans} 
       deleteDay={deleteDay}
       selectedDay={selectedDay} 
       setSelectedDay={setSelectedDay}
        />

      <MyMealsAndIngredients 
      selectedDay={ getActiveMeal() }
      updateDay={updateDay}
      />

    </div>
  );
}

export default App;
