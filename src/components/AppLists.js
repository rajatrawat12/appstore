import "./AppLists.css"
const AppLists=(props)=>{
const{each}=props
const {appName,imageUrl}=each

return(
<div className="logo-container">
<img  className="social-image"src={imageUrl}/>
    <p>{appName}</p>
</div>
);




}
export default AppLists