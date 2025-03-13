import { RepositoryListContainer } from "../../components/RepositoryList";
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        const { getAllByTestId, debug } = render(<RepositoryListContainer repositories={repositories} />)

        // debug();

        const repositoryItems = getAllByTestId('repositoryItem');

        expect(repositoryItems).toHaveLength(2);

        const firstRepo = repositoryItems[0]
        expect(firstRepo).toHaveTextContent('jaredpalmer/formik')
        expect(firstRepo).toHaveTextContent('Build forms in React, without the tears')
        expect(firstRepo).toHaveTextContent('TypeScript')
        expect(firstRepo).toHaveTextContent('1.6k')
        expect(firstRepo).toHaveTextContent('21.9k')
        expect(firstRepo).toHaveTextContent('88')
        expect(firstRepo).toHaveTextContent('3')

        const secondRepo = repositoryItems[1]
        expect(secondRepo).toHaveTextContent('async-library/react-async')
        expect(secondRepo).toHaveTextContent('Flexible promise-based React data loader')
        expect(secondRepo).toHaveTextContent('JavaScript')
        expect(secondRepo).toHaveTextContent('69')
        expect(secondRepo).toHaveTextContent('1.8k')
        expect(secondRepo).toHaveTextContent('72')
        expect(secondRepo).toHaveTextContent('3')
      });
    });
  });