import { Button } from "react-daisyui";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import FormRichText from "../FormRichText";
import FormTextarea from "../FormTextarea";

const PostUpdateForm = () => {
  const methods = useForm({});
  const { handleSubmit, register, control } = methods;

  return (
    <form onSubmit={handleSubmit((v) => console.log(v))}>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-bold">Update Post</h3>
        <div className="flex gap-2">
          <Button type="button" color="error" size="sm" variant="outline">
            Cancel
          </Button>
          <Button type="submit" color="warning" size="sm">
            Update
          </Button>
        </div>
      </div>
      <FormInput label={"Post title"} register={register("title")} />
      <FormTextarea
        label={"Post Description"}
        register={register("description")}
      />
      <FormRichText label={"Post Content"} name="content" control={control} />
    </form>
  );
};

export default PostUpdateForm;
