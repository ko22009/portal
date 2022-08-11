import Layout from "../components/Layout";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../store/actions/newsActions";
import { getNews } from "../store/slices/newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getNewsAction({ page, count: 6 }));
  }, [page]);

  return (
    <Layout>
      <Pagination className="mt-4">
        {Array.from({ length: news.lastPage }).map((_, idx) => (
          <Pagination.Item
            onClick={() => {
              setPage(idx + 1);
            }}
            active={idx === page - 1}
            key={idx}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Row xs={1} md={2} className="g-4 mt-2">
        {news.data.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default News;
