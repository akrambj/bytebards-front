
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const TaskStatistics = ({ project }) => {

  const data = {
    labels: ['Complete Task', 'Inprogress Task', 'On Hold Task', 'Review Task', 'Pending Task'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(241, 81, 27, 1)',
          'rgba(241, 81, 27, 0.7)',
          'rgba(241, 81, 27, 0.5)',
          'rgba(241, 81, 27, 0.3)',
          'rgba(241, 81, 27, 0.1)',
        ],
      },
    ],
  };
 
  return (
    <div className="w-[25%] p-10 flex flex-col gap-5 bg-white rounded-[16px] drop-shadow-card">
      <div className="rounded-t-[16px] bg-[#FFA587] h-[5%] w-[100%] absolute top-0 left-0"></div>
      <div>
        <h2 className="text-2xl capitalize text-[#0B3558] font-bold">
          Task Statistic
        </h2>
      </div>
      <div className="flex items-center gap-4  justify-center text-[#0B3558]">
        <div
          className={`flex flex-col gap-2 border-2 border-[#A6BBD1]  jsutify-center h-[120px] w-[50%] cursor-pointer items-center p-2 rounded-md } duration-300 ease-in-out`}
        >
          <h5 className="text-center text-lg font-medium ">Total Tasks</h5>
          <h5 className="text-center text-xl font-bold">476</h5>
        </div>
        <div
          className={`flex flex-col gap-2 border-2  border-[#A6BBD1]  jsutify-center h-[120px] w-[50%] cursor-pointer items-center p-2 rounded-md  duration-300 ease-in-out `}
        >
          <h5 className=" text-center text-lg font-medium ">Overdue Tasks</h5>
          <h5 className=" text-center  text-xl font-bold">23</h5>
        </div>
      </div>

      <Doughnut data={data} />

    </div>
  );
};

export default TaskStatistics;
