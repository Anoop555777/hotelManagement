import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return null;
}

export async function createEditCabin(cabinData, id = null) {
  console.log(id);
  const hasImagePath = cabinData.image?.startsWith?.(
    "https://sfzhqxiipwnwfsoaateg.supabase.co/storage/v1/object/public/cabin-images"
  );

  const imageName = `${Date.now()}${cabinData.image.name}`.replaceAll("/", "");
  const imageUrl = hasImagePath
    ? cabinData.image
    : `https://sfzhqxiipwnwfsoaateg.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...cabinData, image: imageUrl }]);

  if (id) query = query.update({ ...cabinData, image: imageUrl }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinData.image);

    if (storageError) {
      console.log(storageError);
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error("Cabin image could not be created");
    }
  }

  return data;
}
