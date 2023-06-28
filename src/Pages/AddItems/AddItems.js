import { useForm } from 'react-hook-form';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';





const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch('http://localhost:5000/additem', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => console.log(res));

      reset();


    // Get a Firestore instance


    // try {
    //   // Add the new item to Firestore
    //   await db.collection('items').add({
    //     name: data.name,
    //     description: data.description,
    //     price: data.price,
    //     quantity: data.quantity,
    //     img: data.img,
    //   });

    //   reset();
    // }
    //  catch (error) {
    //         console.error('Error adding item: ', error);
    //       }
  };



  return (
    <div className='flex justify-center mt-5'>
      <div className='card w-96 bg-base-100 shadow-xl items-center flex-row justify-center p-2'>
        <h1 className='text-center text-danger'>Add a New Item</h1>
        <div className=''>
          <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='mb-3 form-control w-full max-w-xs'
              placeholder='Name'
              {...register('name', { required: true, maxLength: 20 })}
            />
            <textarea
              className='mb-3 form-control w-full max-w-xs'
              placeholder='Description'
              {...register('description')}
            />
            <input
              className='mb-3 form-control w-full max-w-xs'
              placeholder='Price'
              type='number'
              {...register('price')}
            />
            <input
              className='mb-3 form-control w-full max-w-xs'
              placeholder='Quantity'
              type='number'
              {...register('quantity')}
            />
            <input
              className='mb-3 form-control w-full max-w-xs'
              placeholder='Photo Url'
              type='text'
              {...register('img')}
            />
            <input
              className='btn bg-blue-400 hover:bg-blue-600 w-full  text-white font-bold py-2 px-4 rounded'
              type='submit'
              value='Add items'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
