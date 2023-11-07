import { render, screen, waitFor } from '../../test.utils';
import HomePage from '../../pages/home';
import { createMemoryHistory } from "history"

describe("Basic Tests", () => {
  it("should render main headline", () => {
    render(<HomePage />);
    expect(screen.getByText(/FIND A BOOK/i)).toBeInTheDocument()
  })

  it("should render lets go button", () => {
    render(<HomePage />);
    const button = screen.getByText(/SEARCH/i);
    expect(button).toBeInTheDocument();
  })

  // mock that router url is /page/5 (but without query, so redirect to homepage)
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      page: '5',
    }),
    useRouteMatch: () => ({ url: '/page/5' }),
  }));

  it("prevent access - should redirect to homePage, lack of query", async () => {
    const history = createMemoryHistory();
    render(<HomePage />);

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/');
    }, {
      timeout: 2000,
    });
  })
})