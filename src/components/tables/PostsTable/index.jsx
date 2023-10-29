import { Badge } from "react-daisyui";
import { Link } from "react-router-dom";

const PostsTable = () => {
  return (
    <div className="overflow-x-auto w-full bg-neutral">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <Link to={"./id"}>Blog post title</Link>
            </td>
            <td>Tech</td>
            <td>
              <Badge size="sm" color="primary">
                PUBLISHED
              </Badge>
            </td>
            <td>12 June, 2023</td>
            <td>02 October, 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
