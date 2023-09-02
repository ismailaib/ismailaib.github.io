import { createClient } from "@sanity/client"; // Import createClient instead of sanityClient
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'ppra5dbr',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skYPh2KoEAQ0AbwdRS0mjeEtWut99SHAgShlmyZDJMptZNcBxBFltNbPxUiC3f9Z140Xu8NPrAM48MuGA0lQ0TPSA0QTIAcwJxXozAFKa6mFe5iERraRZeIzISvBL5YXRz6RlI2Ap0vjO887jOKU9Trk1q6rtl9yqxBZay5NttjNbXYHt6ub',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
