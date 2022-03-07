import Layout from 'components/Layout/Layout';
import Todo from 'components/todo/Todo';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Index Page</h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Todo />  
        </div>  
      </div>
    </Layout>
  );
}
