import { useEffect } from 'react'
import { ApiHelper } from '../helpers/ApiHelper'

const Home = () => {

  const apiHelper = new ApiHelper();

  const getData = async () => {
    const empData = await apiHelper.getDataAsync();
    console.log(empData);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  )
}

export default Home
