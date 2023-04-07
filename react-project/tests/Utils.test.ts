import { imgValid, lengthValid } from "../src/utils/checkFormValid";
import { describe, test, expect } from "vitest";
import { composeNewCard } from "../src/utils/composeNewCard";

describe("Utils", () => {
  test("checking form", () => {
    const resultTrue = lengthValid("Card1");

    const resultFalse = imgValid(new FileList()) || lengthValid("     ");

    expect(resultTrue).toBeTruthy();
    expect(resultFalse).toBeFalsy();
  });
  //   interface MockFile {
  //     name: string;
  //     body: string;
  //     mimeType: string;
  //   }

  //   const createFileFromMockFile = (file: MockFile): File => {
  //     const blob = new Blob([file.body], { type: file.mimeType }) as any;
  //     blob["lastModifiedDate"] = new Date();
  //     blob["name"] = file.name;
  //     return blob as File;
  //   };

  //   function iterator() {
  //     let i = 0;
  //     const keys = Object.keys(this);
  //     return {
  //       next: () => {
  //         // The -1 is to account for our length property
  //         if (i >= Object.keys(this).length - 1) {
  //           i = 0;
  //           return {
  //             value: undefined,
  //             done: true,
  //           };
  //         }
  //         const val = {
  //           value: this[keys[i]],
  //           done: false,
  //         };
  //         i += 1;
  //         return val;
  //       },
  //     };
  //   }

  //   const createMockFileList = (files: MockFile[]) => {
  //     const fileList: FileList = {
  //       length: files.length,
  //       item(index: number): File {
  //         return fileList[index];
  //       },
  //       [Symbol.iterator]: function* () {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  // }
  //     };
  //     files.forEach(
  //       (file, index) => (fileList[index] = createFileFromMockFile(file))
  //     );

  //     return fileList;
  //   };

  const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  const file2 = new File(["this is test file"], "test.txt", {
    type: "text/plain",
  });

  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("name", "file-upload");
  input.multiple = true;

  const mockFileList: FileList = Object.create(input.files);
  mockFileList[0] = file;
  mockFileList[1] = file2;
  Object.defineProperty(mockFileList, "length", { value: 2 });

  const newCard = composeNewCard({
    title: "title",
    description: "description",
    date: "25/02/22",
    country: "USA",
    image: "../assets/img.png",
    available: true,
    agree: "on",
  });

  expect(newCard).toBeTruthy();
  expect(newCard.available).toBeTruthy();
});
