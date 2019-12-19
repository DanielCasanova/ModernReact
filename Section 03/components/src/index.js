import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>
{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 16h45" comment="Nice blog post!" avatar={Faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Joe" timeAgo="Today at 12h30" comment="Awesome!" avatar={Faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Ann" timeAgo="Today at 10h20" comment="Really cool!" avatar={Faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
