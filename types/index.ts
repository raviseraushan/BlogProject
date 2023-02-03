export interface Icollections<T> {
  data: T,
  meta: {
    pagination: {
      page: Number,
      pageSize: Number,
      pageCount: Number,
      total: Number
    }
  }
}
export interface IPosts {
  id: Number,
  attributes: {
    Image:IMageData,
    Title: string,
    publishedAt: string,
    Content: string,
    Slug: string,
    Views: Number,
    label: {
      data: {
        attributes: {
          Name: string,
          Slug: string
        }
      }
    }
  },
}

export interface IHomeData {
  Page: any
  Post: [IPosts],
  Meta: {
    pagination: {
      page: any,
      pageSize: Number,
      pageCount: Number,
      total: Number
    }
  }
}

export interface IBlogData {
  Search: [IPosts]
  Page: any
  Post: [IPosts],
  Meta: {
    pagination: {
      page: any,
      pageSize: Number,
      pageCount: Number,
      total: Number
    }
  }
}

export interface IMageData {
  data: {
    id: Number
    attributes: {
      alternativeText:string
      formats: {
        large:{
          url:string
        }
        small:{
          url:string
        }
      }
    }
  }
}