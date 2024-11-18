import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-semibold uppercase">Logo</h1>
        <div className="flex gap-2">
          <Link
            href="/login"
            className="rounded border border-yellow-400 bg-gray-100 px-3 py-[6px] text-sm duration-300 hover:bg-yellow-500"
          >
            Sign in
          </Link>
          <Link
            className="rounded border border-yellow-400 bg-gray-100 px-3 py-[6px] text-sm duration-300 hover:bg-yellow-500"
            href="/registration"
          >
            Sing up
          </Link>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Contact us</h2>
          <p className="mb-6 text-gray-600">
            Need support? Ways Gold support team is here for you.
          </p>
          <form className="space-y-6">
            {/* Select Field */}
            <div>
              <label
                htmlFor="issueType"
                className="block text-sm font-medium text-gray-700"
              >
                What type of issue you need assistance with?
              </label>
              <select
                id="issueType"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="signIn">Sign in</option>
                <option value="foundAccount">Found account</option>
                <option value="buy">Buy</option>
                <option value="goldRedemption">Gold redemption</option>
                <option value="other">Other question</option>
              </select>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                required
              />
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Detailed description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Describe your issue"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                required
              ></textarea>
            </div>

            {/* File Attachments */}
            <div>
              <label
                htmlFor="attachments"
                className="block text-sm font-medium text-gray-700"
              >
                Attachments
              </label>
              <div className="mt-4 rounded-md border-2 border-dashed border-gray-300 px-6 py-6 text-center">
                <p className="mb-4 text-gray-600">
                  Drag and drop or{" "}
                  <span className="font-semibold text-yellow-600">
                    click to select files
                  </span>
                  . You can upload up to 10 files (.jpeg, .jpg, .png), each file
                  no larger than 10 MB.
                </p>

                <label
                  htmlFor="file-upload"
                  className="block w-full cursor-pointer rounded-md border-2 border-dashed border-yellow-600 px-5 py-3 text-center text-yellow-600 transition duration-200 hover:bg-yellow-600 hover:text-white"
                >
                  <span className="text-sm">
                    Drag files here or click to browse
                  </span>
                </label>

                <input
                  id="file-upload"
                  className="hidden"
                  type="file"
                  name="files"
                  multiple
                  accept=".jpeg,.jpg,.png"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Maximum file size: 10 MB each. You can upload up to 10 files.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-yellow-600 px-4 py-2 text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
