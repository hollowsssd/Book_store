<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BooksStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'isbn'=>'required|string|max:255',
            'name' => 'required|string|max:358',
            'author' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10048',
            'quantity' => 'required|integer|min:0',
            'category' => 'required|string',
        ];
    }

    /**
     * Custom error messages.
     */
    public function messages(): array
    {
        return [
            'isbn'=>'isbn is required ',
            'name.required' => 'Name is required!',
            'author.required' => 'Author is required!',
            'description.required' => 'Description is required!',
            'category.required' => 'Category is required!',
            'price.required' => 'Price is required!',
            'image.required' => 'Image is required!',
            'quantity.required' => 'Quantity is required!',
        ];
    }
}
