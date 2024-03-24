
export const MyList = ({addMeal, id, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
   
    return( 
         <div className="myList">
            <h1> Weekly Meal Plan Ideas </h1>
            <button className="btn-add"  onClick={addMeal}> Add</button>
            <div>
                {mealPlans.map(({title, mealForADay, id}) => (
                    <div className= {`meal ${id===selectedDay ? 'selected' : 'default'}`} onClick={()=>setSelectedDay(id)}>
                        <p>{title} </p>
                        <p>{mealForADay.substring(0,40)}</p>
                        <button className="btn-delete" onClick={()=>deleteDay(id)}> Delete</button>
                    </div>
                ))}
            </div>
        </div>
 
    )
}
 