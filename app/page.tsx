import HeroTop from '../components/hero/HeroTop'
import NormalPlans from '../components/menu-plans/NormalPlans'
import Benefits from '../components/benefits/Benefits'

function Index() {
  return (
    <div>
      <HeroTop />

      <div className='container m-auto px-4'>
        <h1 className='my-8 text-3xl max-w-160 font-light'>Sua empresa merece um plano de celular com 5G mais rápido do mundo</h1>

        <NormalPlans />
      </div>

      <div className='container m-auto px-4 mb-12'>
        <div className='my-8 mt-24'>
          <h3 className='text-3xl max-w-160 font-light'>Com o plano móvel empresarial Vivo seu 5G rende mais!</h3>
        </div>

        <Benefits />
      </div>

      <div className='container m-auto px-4 mb-12 text-sm opacity-75 mt-24'>
        <div className='flex flex-col gap-4'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! Maxime eos assumenda quam id consequuntur!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Quidem numquam natus inventore reiciendis officia eveniet iusto odio, maxime eos assumenda quam id consequuntur! reiciendis officia eveniet iusto odio.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis laudantium, amet alias porro eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    </div>
  )
}

export default Index