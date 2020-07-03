// External dependencies
import * as React from 'react';

// Internal dependencies
import { UseRequestResult } from '../useRequest';

// Testing dependencies
import { ArticleResource, CommentResource } from '__mocks__/types';

interface DiscriminatedComponentProps {
    request: UseRequestResult<ArticleResource | CommentResource>[0];
}

const DiscriminatedComponent: React.FC<DiscriminatedComponentProps> = ({
    request,
}) => <div>{request.response}</div>;

export default DiscriminatedComponent;
