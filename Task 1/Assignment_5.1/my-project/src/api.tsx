
  export async function fetchIssues(data: any): Promise<any> {
    // console.log(data.url)
    const response = await fetch(`${data.url}`);
    return response
}

