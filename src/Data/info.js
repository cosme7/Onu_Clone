import Transport from '../Assets/card_01.svg'
import Busão from '../Assets/card_01.png'
import Health from '../Assets/card_02.svg'
import Cuidados from '../Assets/card_02.jpg'
import Education from '../Assets/card_03.svg'
import Study from '../Assets/card_03.jpg'
import Water from '../Assets/card_04.svg'
import Suja from '../Assets/card_04.png'
import Trash from '../Assets/card_05.svg'
import Lixão from '../Assets/card_05.jpg'

const info = [
    {
        id: 1,
        btn: Transport,
        name: 'Transporte',
        img: Busão,
        title: 'Transporte',
        txt: 'Solicitar a Prefeitura do Estado maior contingente de ônibus, de preferência com cãmeras, pois assim, inibe a violência e os usuários se sentirão mais seguros, e criar meios de conscientização para  manter o transporte limpo e em bom estado.'
    },
    {
        id: 2,
        btn: Health,
        name: 'Saúde',
        img: Cuidados,
        title: 'Saúde',
        txt: 'Solicitar à Prefeitura do Estado mais médicos para o Bairro, ter um estoque mais consistente de remédios, além de reformar as praças colocando equipamentos de exercícios para os idosos.'
    },
    {
        id: 3,
        btn: Education,
        name: 'Educação',
        img: Study,
        title: 'Educação',
        txt: 'Desenvolver projetos que incluam família e escola, e para isso, é importante o apoio da associação de moradores do Bairro e as Igrejas. Juntas elas podem criar cursos profissionalizantes, oficinas de dança, teatro,  enfim, pode ser feito à noite para que abranja os jovens que trabalham durante o dia. É muito importante também divulgar ainda mais a Educação de Jovens e Adultos (EJA).'
    },
    {
        id: 4,
        btn: Water,
        name: 'Saneamento',
        img: Suja,
        title: 'Saneamento',
        txt: 'Criar um abaixo-assinado junto aos moradores solicitando à Prefeitura a limpeza dos Rios do Bairro, junto a isso, trabalho de conscientização para evitar que continuem a polui-lo.'
    },
    {
        id: 5,
        btn: Trash,
        name: 'Reciclagem',
        img: Lixão,
        title: 'Reciclagem',
        txt: 'Fazer um multirão junto a Comlurb para remoção de lixo do Bairro e, principalmente, elaborar um trabalho de conscientização para que se implante os três “Rs”, Reduzir, Reutilizar e Recilcar.'
    },
]

export default info;