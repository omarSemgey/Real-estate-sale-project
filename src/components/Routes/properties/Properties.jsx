import Cards from "../../Cards/Cards";
import Header from "../../Header/Header";
import PageHeader from "../../PageHeader/PageHeader";
import './Properties.css'
export default function Properties() {
  function handleButtons(e,category){
    const buttons = document.getElementsByClassName('buttons')[0].children;
    document.querySelectorAll('.active').forEach((e)=>{
      e.classList.remove('active');
      e.classList.remove('button-nav');
    })
    Array.prototype.forEach.call(buttons, (e) => {e.classList.add('button-nav')});
    e.target.className+=' active';
    e.target.classList.remove('button-nav');
    document.querySelectorAll('.card').forEach((e)=>{
      e.style.display='unset';
    });
    if(category === 'apartment'){
      document.querySelectorAll('.card').forEach((e)=>{
        if(e.id !== 'Apartment'){
          e.style.display='none';
        }
      });
    }
    if(category === 'villa'){
      document.querySelectorAll('.card').forEach((e)=>{
        if(e.id !== 'Luxury villa'){
          e.style.display='none';
        }
      });
    }
    if(category === 'pentHouse'){
      console.log('hey')
      document.querySelectorAll('.card').forEach((e)=>{
        if(e.id !== 'Pent house'){
          e.style.display='none';
        }
      });
    }
  }
  function handleNumbers(e){
    document.querySelectorAll('.working').forEach((e)=>{e.classList.remove('working')})
    e.target.className+='working';
}
  return (
    <>
    <Header link='Properties'></Header>
      <PageHeader phrase='PROPERTIES'></PageHeader>
      <div className="properties">
        <div className="container">
        <div className="buttons-nav">
          <ul className="buttons">
            <li onClick={(e)=>handleButtons(e,'all')} id="1" className="active">Show All</li>
            <li onClick={(e)=>handleButtons(e,'apartment')} id="2" className="button-nav" >Apartment</li>
            <li onClick={(e)=>handleButtons(e,'villa')} id="3"className="button-nav ">Villa House</li>
            <li onClick={(e)=>handleButtons(e,'pentHouse')} id="4"className="button-nav ">Pent house</li>
          </ul>
        </div>
        <Cards></Cards>
        <div className="num-nav">
          <ul>
            <li><a href="#"  onClick={(e)=>handleNumbers(e)} id="1" >1</a></li>
            <li><a href="#"  onClick={(e)=>handleNumbers(e)} id="2" className="working">2</a></li>
            <li><a href="#"  onClick={(e)=>handleNumsberse(e)} id="3" >3</a></li>
            <li><a href="#"  onClick={(e)=>handleNumsbers(e)} id="4" >>></a></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}
