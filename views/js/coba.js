const del = (id) =>{
    alert('Are you delete id : ' +id)
    alert("koneksi sukses")
    axios.delete('/api/produk/'+id).then(result =>{
        alert('info status : '+ result.status)
        location.reload()
        }).catch(err =>{
            alert('error : '+err)
    })
}