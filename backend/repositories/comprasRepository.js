const supabase = require("../config/supabase");

async function criar(compra) {
    return await supabase
        .from("compras")
        .insert([compra])
        .select();
}

async function listar() {
    return await supabase
        .from("compras")
        .select("*")
        .order("data_compra", {
            ascending: false
        });
}
async function atualizar(id, compra) {

    return await supabase
        .from("compras")
        .update(compra)
        .eq("id", id)
        .select();

}
module.exports = {
    criar,
    listar,
    atualizar
};