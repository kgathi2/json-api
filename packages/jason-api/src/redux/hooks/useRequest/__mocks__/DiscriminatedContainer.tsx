// External dependencies
import * as React from 'react';

// Internal dependencies
import { jasonApiRequest } from '../../../actions';
import { useRequest } from '../useRequest';

// Testing dependencies
import { ArticleResource, CommentResource } from '__mocks__/types';
import DiscriminatedComponent from './DiscriminatedComponent';

// Mock Actions.
const mockArticleAction = jasonApiRequest<ArticleResource>({
    url: `/api/articles/article12345`,
});

const mockCommentAction = jasonApiRequest<CommentResource>({
    url: `/api/articles/article12345`,
});

/**
 * This mock is to ensure that discriminated unions can
 * be used for actions (here) and passing the request
 * between components (in the `DiscriminatedComponent).
 */
const DiscriminatedContainer = ({ resourceType = 'article' }) => {
    const discriminatedAction =
        resourceType === 'article' ? mockArticleAction : mockCommentAction;

    const [discriminatedRequest] = useRequest({
        action: discriminatedAction,
        expandResourceObjects: true,
    });

    const concreteAction = mockArticleAction;

    const [concreteRequest] = useRequest({
        action: concreteAction,
        expandResourceObjects: true,
    });

    return (
        <>
            <DiscriminatedComponent request={discriminatedRequest} />
            <DiscriminatedComponent request={concreteRequest} />
        </>
    );
};

export default DiscriminatedContainer;
