import Navbar from './containers/Navbar/page';
import Body from './containers/Body/page';
import Menu from './containers/Menu/page';
import ButtonAdd from './components/buttons/buttonAdd/page';

function App() {
  
  return (
    <>
      <div className="text-right xl:w-3/4 h-screen m-auto p-2 flex flex-col gap-2 font-[Vazir]">
        <Navbar/>
        <section className='h-[92%] flex gap-2 justify-around'>
          <Body/>
          <Menu/>
        </section>
        <ButtonAdd/>
      </div>
    </>
  )
}

export default App;