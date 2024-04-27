"use server";

export async function getAll() {
  try {
    const response = await fetch("https://uploadthing.com/api/listFiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET,
        "X-Uploadthing-Version": "6.4.0",
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return data.files;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteImage(key) {
  try {
    const response = await fetch("https://uploadthing.com/api/deleteFile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET,
        "X-Uploadthing-Version": "6.4.0",
      },
      body: JSON.stringify({
        fileKeys: [`${key}`],
      }),
    });
    if (response?.status != 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
